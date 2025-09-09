import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="text-8xl font-orbitron font-bold gradient-text mb-6">404</div>
        <h1 className="text-4xl font-bold text-text-primary mb-4">Page Not Found</h1>
        <p className="text-xl text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center h-12 px-8 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow-primary transition-all duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
