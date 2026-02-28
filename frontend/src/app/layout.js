import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StateInitialiser from "@/components/StateInitialiser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Point-and-Click Escape Game",
  description: "A browser-based 2D escape game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-black
          antialiased
          overflow-hidden
        `}
      >
        <div className="w-screen h-screen flex items-center justify-center">
          <StateInitialiser>
            {children}
          </StateInitialiser>
        </div>
      </body>
    </html>
  );
}