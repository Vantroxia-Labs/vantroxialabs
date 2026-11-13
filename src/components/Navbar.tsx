import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { PRODUCTS } from "@/data/products";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Engineering", href: "#engineering" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#07090f]/85">
      <a href="#main-heading" className="skip-link visually-hidden">
        Skip to main content
      </a>

      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex min-h-10 items-center rounded-lg"
          aria-label="Vantroxia Labs LTD Home"
        >
          <BrandLogo />
        </a>

        {/* Single primary navigation landmark shared across desktop and mobile */}
        <nav aria-label="Primary" className="flex items-center gap-2.5 md:gap-8">
          <ul
            id={menuId}
            className={`${
              mobileOpen
                ? "absolute inset-x-0 top-full flex flex-col gap-2 border-b border-slate-200 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-[#07090f]"
                : "hidden"
            } md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-10 items-center rounded-lg px-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white md:px-0"
                >
                  {item.label}
                </a>
              </li>
            ))}

            {mobileOpen && (
              <li className="mt-2 border-t border-slate-200 pt-3 dark:border-white/10 md:hidden">
                <p className="mb-2 px-2 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Direct Product Links
                </p>
                <div className="flex flex-col gap-2">
                  {PRODUCTS.map((product) => (
                    <a
                      key={product.id}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 dark:border-white/10 dark:text-slate-100"
                    >
                      <span>{product.name}</span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-indigo-600 dark:text-cyan-400">
                        {product.domain}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </a>
                  ))}
                </div>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100/80 text-slate-700 transition-colors hover:bg-slate-200/80 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
            >
              {isDark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <a
              href="#products"
              className="hidden min-h-10 items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 sm:inline-flex"
            >
              Our Products
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls={menuId}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200 md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
