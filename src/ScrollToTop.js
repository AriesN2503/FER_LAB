import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Route changed to:", pathname); // Debugging to check if the route change is detected
    console.log("Current scroll position:", window.scrollY); // Log current scroll position

    // Use a timeout to ensure the scroll happens after rendering
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [pathname]);

  return null; // Ensure this is returning null
};

export default ScrollToTop;
