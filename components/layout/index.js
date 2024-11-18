"use client";
import { Providers } from "@/store/Provider";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Providers>
      <Navbar />
      {children}
      <SpeedInsights />
    </Providers>
  );
}
