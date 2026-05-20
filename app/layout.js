import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Partha Pratim Dutta | Frontend Developer & UI Designer",
  description: "I create websites that work as hard as you do. Minimalist portfolio showcasing design systems, modern frontend development, and high-converting web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
