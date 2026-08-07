const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    // Course this application was submitted for
    course: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      force: { type: String, required: true },   // e.g. "Army"
      type: { type: String, required: true },    // e.g. "Commissioned Officer"
      title: { type: String, required: true },   // e.g. "PMA Long Course"
    },

    name: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },

    cnic: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{5}-\d{7}-\d{1}$/, "CNIC must be in format xxxxx-xxxxxxx-x"],
    },

    dob: { type: Date, required: true },

    gender: { type: String, required: true, enum: ["Male", "Female"] },

    education: {
      type: String,
      required: true,
      enum: ["Matric", "Intermediate", "Graduate", "Post Graduate"],
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^0\d{2,4}-?\d{7}$/, "Please enter a valid mobile number"],
    },

    domicile: { type: String, trim: true },

    agreedToTerms: { type: Boolean, required: true, default: false },

    status: {
      type: String,
      enum: ["Pending", "Under Review", "Shortlisted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

// Prevent the same CNIC from applying twice for the same course
applicationSchema.index({ cnic: 1, "course.title": 1 }, { unique: true });

module.exports = mongoose.model("Application", applicationSchema);
