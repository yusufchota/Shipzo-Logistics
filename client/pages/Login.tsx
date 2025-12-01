import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../dashboard/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userType, setUserType] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation Logic
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check empty fields
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // USER LOGIN (non-admin)
    if (userType === "user") {
      const result = login(email, password, "user");
      if (result.success) {
        alert("User login successful!");
        navigate("/");
      } else {
        alert(result.message || "User login failed.");
      }
      return;
    }

    // ADMIN LOGIN (protected dashboard)
    if (userType === "admin") {
      const result = login(email, password, "admin");
      if (result.success) {
        alert("Admin login successful!");
        navigate("/dashboard");
      } else {
        alert(result.message || "Invalid ADMIN email or password!");
      }
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header />

      <main className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

            {/* User Type Toggle */}
            <div className="flex gap-4 mb-8">
              {[
                { type: "user", label: "User Login", icon: "👤" },
                { type: "admin", label: "Admin Login", icon: "⚙️" },
              ].map((option) => (
                <button
                  key={option.type}
                  onClick={() => setUserType(option.type as "user" | "admin")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    userType === option.type
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{option.icon}</span>
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {userType === "user" ? "Welcome Back" : "Admin Access"}
              </h1>
              <p className="text-gray-600">
                {userType === "user"
                  ? "Sign in to your logistics account"
                  : "Access admin dashboard"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>

                <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl mt-8"
              >
                Sign In
              </button>
            </form>

          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-8">
            By signing in, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>

        </div>
      </main>
    </div>
  );
}



