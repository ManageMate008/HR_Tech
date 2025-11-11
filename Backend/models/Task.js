import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  employeeEmail: { type: String, required: true },
  taskTitle: { type: String, required: true },
  taskDescription: { type: String, required: true },
  deadline: { type: String, required: true },
  status: { type: String, default: "Assigned" }, // Assigned | In Progress | Completed
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);
