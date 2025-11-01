"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimatedLayout({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen flex flex-col bg-[#DDC591] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] bg-repeat bg-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
