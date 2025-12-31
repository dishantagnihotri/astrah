import Image from "next/image";
import { Logo } from "./components/icons/Logo";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <header>
        <div className="container px-5 py-5 fixed top-0 w-full mx-auto flex justify-end gap-4 items-center">
          <Logo />
        </div>
      </header>
      <main>
        <section className="hero-section h-screen bg-lightBg dark:bg-darkBg">
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center gap-10">
              <div className="hero-content w-full text-right direction" dir="rtl">
                <h2 className="text-[68px] leading-[84px] max-w-xl font-extrabold text-lightTextPrimary dark:text-darkTextPrimary/90 mb-5">نظام تشغيل دقيق للشركات في الخليج</h2>
                <p className="text-lg text-lightTextSecondary dark:text-darkTextSecondary tracking-tight">نظام تشغيل ذكي مخصص للشركات في دول مجلس التعاون الخليجي.</p>
              </div>
              <div className="image-section w-full flex items-center justify-center">
                <Image src="/images/hero-image.png" alt="hero-image" width={400} height={400} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
