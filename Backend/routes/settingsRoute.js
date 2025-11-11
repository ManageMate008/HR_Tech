
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Settings from "../models/Settings.js";

const router = express.Router();

router.put("/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;
    if (!email || !currentPassword || !newPassword) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: "Current password is incorrect" });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Change Password Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * Update email
 * Body: { oldEmail, newEmail }
 * This updates User.email and also migrates Settings (if any) from oldEmail -> newEmail
 */
router.put("/update-email", async (req, res) => {
  try {
    const { oldEmail, newEmail } = req.body;
    if (!oldEmail || !newEmail) return res.status(400).json({ message: "Missing emails" });

    // check new email not already used
    const existing = await User.findOne({ email: newEmail });
    if (existing) {
      return res.status(409).json({ message: "New email already in use" });
    }

    // update user document
    const user = await User.findOneAndUpdate(
      { email: oldEmail },
      { email: newEmail },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    // Move or merge settings: if oldEmail has settings, upsert them under newEmail
    const oldSettings = await Settings.findOne({ email: oldEmail });
    if (oldSettings) {
      // Upsert new settings document with same preferences
      await Settings.findOneAndUpdate(
        { email: newEmail },
        { notificationPreferences: oldSettings.notificationPreferences },
        { upsert: true }
      );
      // Remove old settings
      await Settings.deleteOne({ email: oldEmail });
    }

    res.json({ message: "Email updated successfully", user });
  } catch (err) {
    console.error("Update Email Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * Get user's settings
 * GET /api/profile/settings/:email
 */
router.get("/settings/:email", async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) return res.status(400).json({ message: "Email required" });

    const settings = await Settings.findOne({ email });
    if (!settings) {
      // return defaults if not found
      return res.json({
        email,
        notificationPreferences: {
          emailNotify: true,
          smsNotify: false,
          pushNotify: false
        }
      });
    }

    res.json(settings);
  } catch (err) {
    console.error("Fetch Settings Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * Update user's settings
 * PUT /api/profile/settings
 * Body: { email, notificationPreferences: { emailNotify, smsNotify, pushNotify } }
 */
router.put("/settings", async (req, res) => {
  try {
    const { email, notificationPreferences } = req.body;
    if (!email || !notificationPreferences) return res.status(400).json({ message: "Missing data" });

    const settings = await Settings.findOneAndUpdate(
      { email },
      { notificationPreferences },
      { new: true, upsert: true }
    );

    res.json({ message: "Settings updated", settings });
  } catch (err) {
    console.error("Update Settings Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
