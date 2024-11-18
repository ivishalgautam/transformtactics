import React, { useEffect } from "react";

function ClearInputOnScroll({ inputVal, setInputVal }) {
  useEffect(() => {
    const handleScroll = () => {
      if (inputElement) {
        setInputVal("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inputVal]);

  return null;
}

export default ClearInputOnScroll;
