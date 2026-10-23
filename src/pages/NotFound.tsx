import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-white">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-violet-300">404</p>
        <h1 className="mt-3 font-display text-5xl">This page is not here.</h1>
        <p className="mt-3 text-zinc-400">The address does not match a page on this portfolio.</p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950">
          Back to the portfolio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
