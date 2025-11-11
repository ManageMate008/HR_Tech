// import express from "express";
// import Task from "../models/Task.js";

// const router = express.Router();

// // ➤ Assign Task (HR)
// router.post("/assign", async (req, res) => {
//   try {
//     const { employeeEmail, taskTitle, taskDescription, deadline } = req.body;

//     const newTask = new Task({ employeeEmail, taskTitle, taskDescription, deadline });
//     await newTask.save();

//     res.json({ success: true, message: "✅ Task Assigned Successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// });

// // ➤ Fetch Employee Task (Employee Dashboard)
// router.get("/my-tasks/:email", async (req, res) => {
//   try {
//     const tasks = await Task.find({ employeeEmail: req.params.email }).sort({ createdAt: -1 });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// export default router;

import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// ➤ Assign Task (HR)
router.post("/assign", async (req, res) => {
  try {
    const { employeeEmail, taskTitle, taskDescription, deadline } = req.body;

    console.log("📌 Assign Task Request Received:");
    console.log(`Employee: ${employeeEmail}`);
    console.log(`Task: ${taskTitle}`);
    console.log(`Deadline: ${deadline}`);

    const newTask = new Task({ employeeEmail, taskTitle, taskDescription, deadline });
    await newTask.save();

    console.log("✅ Task saved successfully in DB");

    res.json({ success: true, message: "✅ Task Assigned Successfully" });
  } catch (error) {
    console.error("❌ Error assigning task:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ➤ Fetch Employee Task (Employee Dashboard)
router.get("/my-tasks/:email", async (req, res) => {
  try {
    const employeeEmail = req.params.email;

    console.log(`🔍 Fetching tasks for: ${employeeEmail}`);

    const tasks = await Task.find({ employeeEmail }).sort({ createdAt: -1 });

    console.log(`📦 ${tasks.length} task(s) found for ${employeeEmail}`);

    res.json(tasks);
  } catch (error) {
    console.error("❌ Error fetching tasks:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;

