import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, role: "admin" | "user" }
  const [theme, setTheme] = useState("light");

  // Load saved auth + theme from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("yaaz-user");
    const storedTheme = localStorage.getItem("yaaz-theme");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse stored user", err);
      }
    }

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Persist user in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("yaaz-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("yaaz-user");
    }
  }, [user]);

  // Persist theme in localStorage
  // useEffect(() => {
  //   localStorage.setItem("yaaz-theme", theme);
  // }, [theme]);

  useEffect(() => {
    localStorage.setItem("yaaz-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  /**
   * Login handler
   * - For admin: requires correct hard-coded credentials
   * - For user: accepts any non-empty email/password
   */
  const login = (email, password, role = "user") => {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    if (role === "admin") {
      const ADMIN_EMAIL = "yusufchota7@gmail.com";
      const ADMIN_PASSWORD = "yusufchota7@2315";

      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const userData = { email, role: "admin" };
        setUser(userData);
        return { success: true, user: userData };
      }

      return { success: false, message: "Invalid admin email or password." };
    }

    // Normal user login (no strict check)
    const userData = { email, role: "user" };
    setUser(userData);
    return { success: true, user: userData };
  };

  const logout = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    user,
    login,
    logout,
    theme,
    toggleTheme,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
