import express from "express";
import Leave from "../models/Leave.js";

const router = express.Router();

// APPLY FOR LEAVE
// router.post("/apply", async (req, res) => {
//   try {
//     console.log("Leave apply request body:", req.body);
//     const { employeeEmail, leaveType, fromDate, toDate, reason } = req.body;

//     const leave = new Leave({ employeeEmail, leaveType, fromDate, toDate, reason });
//     await leave.save();

//     res.status(201).json({ message: "Leave request submitted successfully" });
//   } 
//   catch (err) {
//     console.error("Leave apply error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // GET LEAVE HISTORY (for Employee UI)
// router.get("/history/:email", async (req, res) => {
//   try {
//     const history = await Leave.find({ employeeEmail: req.params.email });
//     res.json(history);
//   } 
//   catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// export default router;

// APPLY FOR LEAVE
// router.post("/apply", async (req, res) => {
router.post("/apply", async (req, res) => {
  try {
    console.log("📩 Leave Apply Request Body:", req.body); // Log request body

    // const { employeeEmail, leaveType, fromDate, toDate, reason } = req.body;
    const {  leaveType, fromDate, toDate, reason } = req.body;
    // Check missing fields
    // if (!employeeEmail || !leaveType || !fromDate || !toDate || !reason) {
    if (!leaveType || !fromDate || !toDate || !reason) {
      console.log("❌ Missing required fields in leave apply request");
      return res.status(400).json({ 
        message: "All fields are required (employeeEmail, leaveType, fromDate, toDate, reason)" 
      });
    }

    // const leave = new Leave({ employeeEmail, leaveType, fromDate, toDate, reason });
    const leave = new Leave({ leaveType, fromDate, toDate, reason });
    await leave.save();

    console.log("✅ Leave saved successfully:", leave);
    res.status(201).json({ message: "Leave request submitted successfully", leave });
  } 
  catch (err) {
    console.error("🔥 Leave apply server error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;