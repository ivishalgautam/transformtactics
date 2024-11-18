import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Provider";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Script from "next/script";
import Layout from "@/components/layout/index";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "TransformTactics",
  description: "TransformTactics.",
  keywords: "TransformTactics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TransformTactics",
    description: "TransformTactics",
    keywords: "TransformTactics",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <body className={poppins.className} suppressHydrationWarning={true}>
        <Layout>
          <Toaster position="bottom-right" />
          {children}
        </Layout>
      </body>
    </html>
  );
}
