import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Shield,
  Key,
  Bell,
  Moon,
  Sun,
  Trash2,
} from "lucide-react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="lg:ms-52 p-6 mt-16 space-y-8 animate-fadeIn bg-white text-black dark:bg-gray-900 dark:text-white">

      {/* Page Header */}
      <div>
        <h3 className="text-3xl font-bold text-gray-800">Settings</h3>
        <p className="text-gray-500">Manage your profile, security, and preferences.</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-200 animate-slideUp">
        <div className="flex items-center gap-3 mb-4">
          <User className="text-blue-600" />
          <h4 className="text-xl font-semibold">Profile Settings</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              className="w-full mt-1 p-2 rounded-lg border"
              type="text"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <div className="flex items-center mt-1 p-2 rounded-lg border">
              <Mail size={18} className="text-gray-500 mr-2" />
              <input className="w-full outline-none" type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Role</label>
            <select className="w-full mt-1 p-2 rounded-lg border">
              <option>Logistics Manager</option>
              <option>Supervisor</option>
              <option>Driver</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 font-medium">Phone</label>
            <div className="flex items-center mt-1 p-2 rounded-lg border">
              <Phone size={18} className="text-gray-500 mr-2" />
              <input className="w-full outline-none" type="number" placeholder="+91 98765 43210" />
            </div>
          </div>
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>

      {/* Account Security */}
      <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-200 animate-slideUp delay-150">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="text-purple-600" />
          <h4 className="text-xl font-semibold">Security</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-gray-700 font-medium">Current Password</label>
            <input className="w-full mt-1 p-2 rounded-lg border" type="password" />
          </div>

          <div>
            <label className="text-gray-700 font-medium">New Password</label>
            <input className="w-full mt-1 p-2 rounded-lg border" type="password" />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Confirm Password</label>
            <input className="w-full mt-1 p-2 rounded-lg border" type="password" />
          </div>
        </div>

        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Update Password
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white/90 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-200 animate-slideUp delay-200">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-green-600" />
          <h4 className="text-xl font-semibold">Notification Preferences</h4>
        </div>

        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" />
            Enable email notifications
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" />
            Enable SMS alerts
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5" />
            Weekly performance summary
          </label>
        </div>

        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Save Preferences
        </button>
      </div>

      {/* Theme Switcher */}
      <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-gray-200 animate-slideUp delay-300">
        <div className="flex items-center gap-3 mb-4">
          {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-black" />}
          <h4 className="text-xl font-semibold">Theme</h4>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-300 shadow-lg rounded-2xl p-6 animate-slideUp delay-500">
        <div className="flex items-center gap-3 mb-3">
          <Trash2 className="text-red-700" />
          <h4 className="text-xl font-semibold text-red-700">Danger Zone</h4>
        </div>

        <p className="text-red-600 mb-4">
          Deleting your account is irreversible. All your data will be permanently removed.
        </p>

        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          Delete Account
        </button>
      </div>

    </div>
  );
}

export default Settings;
