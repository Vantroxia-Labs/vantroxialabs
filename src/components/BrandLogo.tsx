interface BrandLogoProps {
  showSubtitle?: boolean;
}

export function BrandLogo({ showSubtitle = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="brand-vl-grad"
            x1="8"
            y1="8"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6c47ff" />
            <stop offset="100%" stopColor="#00c6ff" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#0b0f19" />
        <rect
          x="1.5"
          y="1.5"
          width="61"
          height="61"
          rx="14.5"
          stroke="url(#brand-vl-grad)"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
        <path
          d="M16 19L32 47L48 19H39.5L32 33L24.5 19H16Z"
          fill="url(#brand-vl-grad)"
        />
        <circle cx="32" cy="17" r="3" fill="#00c6ff" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
          Vantroxia <span className="text-indigo-600 dark:text-cyan-400">Labs</span>
        </span>
        {showSubtitle && (
          <span className="mt-1 font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
            LTD • Product Studio
          </span>
        )}
      </span>
    </span>
  );
}

