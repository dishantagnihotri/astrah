"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Logo } from "./components/icons/Logo";
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="dark:bg-black">
      <header>
        <div className="container px-5 py-5 fixed top-0 w-full mx-auto flex justify-end gap-4 items-center">
          <Logo />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
      <main>
        <section className="hero-section h-screen bg-lightBg dark:bg-darkBg">
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center gap-10">
              <motion.div
                className="hero-content w-full text-right direction"
                dir="rtl"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.25, // 200–300ms
                    ease: "easeOut",
                  },
                }}
              >
                <motion.h2 className="text-[68px] leading-[84px] max-w-xl font-extrabold text-lightTextPrimary dark:text-darkTextPrimary/90 mb-5"
                initial={{ opacity: 0,  y: 6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.25, // 200–300ms
                    ease: "easeOut",
                  },
                }}
                transition={{ delay: 0.1 }}>
                  نظام تشغيل دقيق للشركات في الخليج
                </motion.h2>

                <motion.p
                initial={{ opacity: 0,  y: 6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.25, // 200–300ms
                    ease: "easeOut",
                  },
                }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-lightTextSecondary dark:text-darkTextSecondary tracking-tight"
                >
                  نظام تشغيل ذكي مخصص للشركات في دول مجلس التعاون الخليجي.
                </motion.p>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                className="image-section w-full flex items-center justify-center"
                initial={{ opacity: 0,  y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.25, // 200–300ms
                    ease: "easeOut",
                  },
                }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  src="/images/hero-image.png"
                  alt="hero-image"
                  width={400}
                  height={400}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
