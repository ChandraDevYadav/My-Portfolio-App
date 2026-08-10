import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import AIChatbot from "./_components/AIChatbot/AIChatbot";
import CustomCursor from "./_components/CustomCursor/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chandra Dev Yadav | Portfolio",
  description: "A premium developer portfolio showcasing AI products, modern web experiences, and case studies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased selection:bg-indigo-500/30`}>
        <CustomCursor />
        <div className="relative min-h-screen flex flex-col">
          <Navbar/>
          <main className="flex-grow">
            {children}
          </main>
          <Footer/>
          <AIChatbot />
        </div>
      </body>
    </html>
  );
}
