import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Savoria Delights",
    default: "Savoria Delights",
  },
  description: "Welcome to Savoria Delights!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="bg-[#121212] text-gray-200">
      <body className={inter.className} class="bg-[#121212] text-gray-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
