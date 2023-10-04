"use client";

import "./globals.css";
import Navigation from "./components/navigation";
import { useState, useRef, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollable = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);

    const handleScroll = () => {
      const currentScrollable = scrollable.current; // Create a variable to hold the current value
      if (currentScrollable) {
        const scrollPosition = currentScrollable.scrollTop;
        const sections = currentScrollable.children;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i] as HTMLElement;
          const sectionTop = section.offsetTop - 60;
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (["Home", "About", "Projects", "Contact"].includes(section.id)) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    const currentScrollable = scrollable.current; // Create a variable to hold the current value
    if (currentScrollable) {
      currentScrollable.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentScrollable) {
        console.log("removing the event listener");
        currentScrollable.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const localDarkMode = JSON.parse(
      localStorage.getItem("darkMode") || `${prefersDarkMode}`
    );
    if (localDarkMode !== darkMode) {
      setDarkMode(localDarkMode);
    }
  }, [darkMode]);

  return (
    <html
      lang="en"
      className={darkMode ? "dark transition-all ease-linear" : ""}
    >
      <body className="dark:bg-Background bg-Text-Color overflow-x-hidden relative">
        {/*<AnimatePresence key={1} mode={"wait"}>*/}
        <Navigation
          activeSection={activeSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div
          className="w-screen h-screen overflow-x-hidden md:snap-mandatory md:snap-y flex flex-col md:block scrollbar-hide relative overflow-auto pb-24"
          ref={scrollable}
        >
          {children}
        </div>
        {/*</AnimatePresence>*/}
      </body>
    </html>
  );
}
