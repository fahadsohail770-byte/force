const express = require("express");
const router = express.Router();

const {
  createApplication,
  getApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} = require("../controller/applicationController");

// POST /api/applications        -> submit new application (used by ApplicationForm.jsx)
// GET  /api/applications        -> list applications (admin, supports ?force=&status=&page=&limit=)
router.route("/").post(createApplication).get(getApplications);

// GET    /api/applications/:id  -> get one application
// DELETE /api/applications/:id  -> delete one application
router.route("/:id").get(getApplicationById).delete(deleteApplication);

// PATCH /api/applications/:id/status -> update status only
router.patch("/:id/status", updateApplicationStatus);

module.exports = router;
