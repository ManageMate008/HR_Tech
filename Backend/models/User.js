import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ["HR", "Employee"], required: true },
  empId:   { type: String, },
  mobile :   { type: String, },
  department :   { type: String, },
  designation :   { type: String, },
  dateOfJoining :   { type: Date, },
});

export default mongoose.model("User", userSchema);