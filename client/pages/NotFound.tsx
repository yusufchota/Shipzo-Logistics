import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg text-center"
            >
              Return to Home
            </Link>
            <Link
              to="/advanced"
              className="inline-flex px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Advanced Solutions
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need help?</p>
            <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">
              Contact our support team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
