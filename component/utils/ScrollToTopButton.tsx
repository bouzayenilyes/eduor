"use client";
import React, { useEffect, useState } from "react";
type Props = {
  style: string;
}
const ScrollToTopButton = ({ style }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get the current scroll position
    const scrolling = window.scrollY;

    // Show the button when scrolling down beyond a certain point (e.g., 300 pixels)
    if (scrolling > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <div
          className={`tf__scroll_btn ${style}`}
          role="button"
          onClick={scrollToTop}
        >
          {" "}
          go to top{" "}
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
