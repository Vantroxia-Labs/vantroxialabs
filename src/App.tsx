import { useCallback, useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { EngineeringSection } from "./components/EngineeringSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProductsSection } from "./components/ProductsSection";

type StoredScheme = "light" | "dark" | null;

const STORAGE_KEY = "color-scheme";

function readStoredScheme(): StoredScheme {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    return val === "light" || val === "dark" ? val : null;
  } catch {
    return null;
  }
}

function getSystemDark(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function syncMetaColorScheme(stored: StoredScheme) {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (meta) {
    meta.content = stored ?? "light dark";
  }
}

export function App() {
  // Match SSR defaults on initial render so hydrateRoot stays deterministic.
  const [storedScheme, setStoredScheme] = useState<StoredScheme>(null);
  const [systemDark, setSystemDark] = useState<boolean>(true);
  const hydratedRef = useRef(false);

  const isDark = storedScheme !== null ? storedScheme === "dark" : systemDark;

  useEffect(() => {
    if (!hydratedRef.current) return;
    syncMetaColorScheme(storedScheme);
  }, [storedScheme]);

  useEffect(() => {
    hydratedRef.current = true;
    const initialStored = readStoredScheme();
    setStoredScheme(initialStored);
    setSystemDark(getSystemDark());
    syncMetaColorScheme(initialStored);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setSystemDark(event.matches);
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY || event.key === null) {
        setStoredScheme(readStoredScheme());
      }
    };

    mq.addEventListener("change", handleMediaChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      mq.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleToggleTheme = useCallback(() => {
    const target: "light" | "dark" = isDark ? "light" : "dark";
    const systemScheme: "light" | "dark" = systemDark ? "dark" : "light";

    // Only store when diverging from the current OS preference; remove when reverting.
    const nextStored: StoredScheme = target === systemScheme ? null : target;
    try {
      if (nextStored === null) {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, nextStored);
      }
    } catch {
      // Ignore storage errors when site data is blocked; state still updates in-memory.
    }
    setStoredScheme(nextStored);
  }, [isDark, systemDark]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#07090f] dark:text-slate-100">
      <Navbar isDark={isDark} onToggleTheme={handleToggleTheme} />
      <main id="main-content">
        <Hero />
        <ProductsSection />
        <EngineeringSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
