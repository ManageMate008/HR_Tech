import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    phone: { type: String, trim: true },
    department: { type: String, trim: true },
    designation: { type: String, trim: true },
    role: { type: String, default: "employee" },
    salary: { type: Number, min: 0 },
    joinDate: { type: Date },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    address: { type: String, trim: true }
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
