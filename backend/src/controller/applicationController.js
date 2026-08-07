const Application = require("../models/Application");

// @desc    Submit a new application
// @route   POST /api/applications
// @access  Public
exports.createApplication = async (req, res) => {
  try {
    const {
      course,
      name,
      fatherName,
      cnic,
      dob,
      gender,
      education,
      email,
      phone,
      domicile,
      agreedToTerms,
    } = req.body;

    // Basic required-field check (mirrors the frontend's `required` fields)
    const requiredFields = { course, name, fatherName, cnic, dob, gender, education, phone };
    const missing = Object.entries(requiredFields)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required field(s): ${missing.join(", ")}`,
      });
    }

    if (!agreedToTerms) {
      return res.status(400).json({
        success: false,
        message: "You must agree to the terms & conditions to submit.",
      });
    }

    const application = await Application.create({
      course,
      name,
      fatherName,
      cnic,
      dob,
      gender,
      education,
      email,
      phone,
      domicile,
      agreedToTerms,
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      data: application,
    });
  } catch (error) {
    // Duplicate CNIC for the same course
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "You have already applied for this course with this CNIC.",
      });
    }

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(" ") });
    }

    console.error("createApplication error:", error);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
};

// @desc    Get all applications (with optional filters + pagination)
// @route   GET /api/applications
// @access  Private (admin)
exports.getApplications = async (req, res) => {
  try {
    const { force, status, page = 1, limit = 20 } = req.query;

    const filter = {};
    if (force) filter["course.force"] = force;
    if (status) filter.status = status;

    const applications = await Application.find(filter)
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Application.countDocuments(filter);

    return res.status(200).json({
      success: true,
      count: applications.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: applications,
    });
  } catch (error) {
    console.error("getApplications error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

// @desc    Get a single application by ID
// @route   GET /api/applications/:id
// @access  Private (admin)
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }

    return res.status(200).json({ success: true, data: application });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ success: false, message: "Invalid application ID." });
    }
    console.error("getApplicationById error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

// @desc    Update application status (e.g. Shortlisted, Rejected)
// @route   PATCH /api/applications/:id/status
// @access  Private (admin)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ["Pending", "Under Review", "Shortlisted", "Rejected"];

    if (!allowed.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Status must be one of: ${allowed.join(", ")}`,
      });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }

    return res.status(200).json({ success: true, data: application });
  } catch (error) {
    console.error("updateApplicationStatus error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

// @desc    Delete an application
// @route   DELETE /api/applications/:id
// @access  Private (admin)
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found." });
    }

    return res.status(200).json({ success: true, message: "Application deleted." });
  } catch (error) {
    console.error("deleteApplication error:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};
