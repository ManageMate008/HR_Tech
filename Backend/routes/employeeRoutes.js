import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

// CREATE EMPLOYEE
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      department,
      designation,
      role,
      salary,
      joinDate,
      status,
      address,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "'name' and 'email' are required" });
    }

    const existing = await Employee.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Employee with this email already exists" });
    }

    const employee = new Employee({
      name,
      email,
      phone,
      department,
      designation,
      role,
      salary,
      joinDate,
      status,
      address,
    });

    const saved = await employee.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error("Create employee error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
