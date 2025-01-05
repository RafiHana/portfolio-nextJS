import Navbar from "@/app/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin'] })

export const metadata = {
  title: "Portfolio",
  description: "Portfolio Rafi Hana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.clasname} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
