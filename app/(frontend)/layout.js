import { Special_Elite } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "./AnimatedLayout";

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Portofolio: The Investigation of Laras",
  description: "Cari tahu tentang Laras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${specialElite.className} ${specialElite.variable} antialiased min-h-screen 
        bg-[#DDC591] 
        bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]
        bg-repeat bg-auto 
        border-[15px] md:border-[30px] border-[#EDE8D0] flex flex-col
        `}
      > <AnimatedLayout>
          {children}
      </AnimatedLayout>
      </body>
    </html>
  );
}
