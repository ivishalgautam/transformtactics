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
  title: "Panamax | Biggest Tape Manufacturer in India",
  description:
    "Panamax: India's Premier Tape Manufacturer in India Offering a Wide Range of High-Quality Tapes. From Adhesive to Specialty Tapes, Explore Our Extensive Tape Collection. Enhance Your Projects with Panamax Tapes.",
  keywords:
    "Masking Tape, Pre-Masking Tape, THB Acrylic Nano-Sil Tape, Mirror Mounting Tape, PMX 5000 Electrical Insulation Tape, Dry Wall Joint Tape, PTFE Thread Seal Tape, Plate Mounting Tape, PTFE Fiber Tape, Structural Glazing Tape, Multi Stick Tape, Anti-Slip Tape, Shuttering Tape, Laminate Fixing Tape, Edge Banding Tape, Roof Repair Tape, Leak Stopper Tape, Surface Protection Tape, Craft Paper Tape, BOPP Packaging Tape, Floor Protection Tape, Wood Guard Tape, Floor Marking Tape, Spacer & Eva Cloth Duct Tape, Red Polyster Tape, adhesive tape, mask tape, tape manufacture, self adhesive tape",
  alternates: {
    canonical: "https://panamax.co.in/",
  },
  openGraph: {
    title: "Panamax | India's biggest tape manufacturer in India",
    description:
      "Panamax: India's Premier Tape Manufacturer in India Offering a Wide Range of High-Quality Tapes. From Adhesive to Specialty Tapes, Explore Our Extensive Tape Collection. Enhance Your Projects with Panamax Tapes.",
    keywords:
      "Masking Tape, Pre-Masking Tape, THB Acrylic Nano-Sil Tape, Mirror Mounting Tape, PMX 5000 Electrical Insulation Tape, Dry Wall Joint Tape, PTFE Thread Seal Tape, Plate Mounting Tape, PTFE Fiber Tape, Structural Glazing Tape, Multi Stick Tape, Anti-Slip Tape, Shuttering Tape, Laminate Fixing Tape, Edge Banding Tape, Roof Repair Tape, Leak Stopper Tape, Surface Protection Tape, Craft Paper Tape, BOPP Packaging Tape, Floor Protection Tape, Wood Guard Tape, Floor Marking Tape, Spacer & Eva Cloth Duct Tape, Red Polyster Tape, adhesive tape, mask tape, tape manufacture, self adhesive tape",
  },
};

export default function RootLayout({ children }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Panamax",
    name: "PANAMAX TAPES",
    image:
      "https://panamax.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.17759761.png&w=384&q=75",
    "@id": "",
    url: "https://panamax.co.in/",
    telephone: "18009992049",
    address: {
      "@type": "PostalAddress",
      streetAddress: "594-595/154 Pooth Khurd Bawana",
      addressLocality: "Delhi",
      postalCode: "110039",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4840092,
      longitude: 77.320955,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "07:00",
    },
    sameAs: [
      "https://www.facebook.com/people/Panamax-Tapes/100064000752424/",
      "https://www.instagram.com/panamax_tapes/",
      "https://www.youtube.com/@PanamaxLimited",
      "https://www.linkedin.com/company/panamaxtapes/",
      "https://panamax.co.in/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />

        <GoogleTagManager gtmId="GTM-NDFF5SCZ" />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDFF5SCZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </head>

      <body className={poppins.className} suppressHydrationWarning={true}>
        <Layout>
          <Toaster position="bottom-right" />
          {children}
        </Layout>
      </body>
    </html>
  );
}
