type LogoProps = {
  compact?: boolean
  className?: string
}

export function Logo({ compact = false, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className={compact ? 'h-8 w-8' : 'h-10 w-10'}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 2.5 36.5 12v16L20 37.5 3.5 28V12L20 2.5Z"
          stroke="#C8FF00"
          strokeWidth="2"
        />
        <path
          d="M11 20h18M15 15.5v9M25 15.5v9"
          stroke="#C8FF00"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <div className="leading-none">
        <p className="font-display text-lg font-bold tracking-[0.14em] text-white">
          IRONCORE
        </p>
        <p className="mt-1 text-[10px] font-semibold tracking-[0.38em] text-lime">
          GYM
        </p>
      </div>
    </div>
  )
}
