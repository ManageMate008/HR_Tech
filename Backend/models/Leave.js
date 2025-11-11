import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
  // employeeEmail: { type: String, required: true },
  leaveType: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  reason: { type: String, required: true },
  // status: { type: String, default: "Pending" } // Pending, Approved, Rejected
}, { timestamps: true });

export default mongoose.model("Leave", leaveSchema);
