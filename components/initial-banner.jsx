import React, { useEffect, useState } from "react";

export default function InitialBanner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, [2000]);
  }, []);

  return (
    <div
      className={`absolute inset-0 bg-black transition-all duration-700 z-50 overflow-hidden flex items-center justify-center text-white ${
        show ? "opacity-100" : "-translate-y-full"
      }`}
    >
      InitialBanner
    </div>
  );
}
