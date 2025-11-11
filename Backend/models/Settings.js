// models/Settings.js
import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  notificationPreferences: {
    emailNotify: { type: Boolean, default: true },
    smsNotify: { type: Boolean, default: false },
    pushNotify: { type: Boolean, default: false }
  }
}, { timestamps: true });

export default mongoose.model("Settings", settingsSchema);
