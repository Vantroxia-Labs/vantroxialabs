import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export function ContactSection() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [liveMessage, setLiveMessage] = useState("");
  const lastMessageRef = useRef("");
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, []);

  const announce = (ok: boolean) => {
    window.clearTimeout(timerRef.current);
    let message = ok ? "Copied" : "Copy failed";
    // Append NBSP when repeating the same status so VoiceOver announces repeat clicks.
    if (message === lastMessageRef.current) {
      message += "\u00A0";
    }
    lastMessageRef.current = message;

    setCopyState(ok ? "copied" : "failed");
    setLiveMessage("");
    requestAnimationFrame(() => setLiveMessage(message));

    timerRef.current = window.setTimeout(() => {
      setCopyState("idle");
      setLiveMessage("");
    }, 2000);
  };

  const handleCopyEmail = async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(COMPANY.email);
      announce(true);
    } catch {
      announce(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200/80 py-20 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 text-white shadow-2xl sm:p-12 dark:border-white/15 dark:from-[#0e1424] dark:via-[#0b101d] dark:to-[#101936]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Contact &amp; Partnerships
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to explore our platforms or partner with us?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Reach out to {COMPANY.legalName} for enterprise onboarding, on-premise
                licensing, ERP integrations, or general inquiries.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span id="company-email">{COMPANY.email}</span>
                </a>

                <span className="relative inline-flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={`Copy ${COMPANY.email}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {copyState === "copied" ? (
                      <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    ) : copyState === "failed" ? (
                      <AlertCircle className="h-4 w-4 text-amber-300" aria-hidden="true" />
                    ) : (
                      <Copy className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span>Copy email</span>
                  </button>

                  {/* Live region kept outside the button so screen readers announce status changes */}
                  <span
                    role="status"
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-opacity ${
                      liveMessage
                        ? copyState === "failed"
                          ? "bg-amber-500/20 text-amber-200 opacity-100"
                          : "bg-emerald-500/20 text-emerald-200 opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    {liveMessage}
                  </span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Direct Product Access
                </p>
                <div className="mt-3 space-y-2.5">
                  {PRODUCTS.map((product) => (
                    <a
                      key={product.id}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-colors hover:border-cyan-400/50 hover:bg-white/10"
                    >
                      <span>{product.name}</span>
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-cyan-300">
                        {product.domain}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
