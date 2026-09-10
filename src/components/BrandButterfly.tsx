interface BrandButterflyProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'flutter' | 'float' | 'ambient';
  colorTone?: 'purple-gold' | 'pure-gold' | 'purple-glow';
}

export function BrandButterfly({
  className = '',
  size = 'md',
  variant = 'flutter',
}: BrandButterflyProps) {
  const sizeMap = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const animClass =
    variant === 'flutter'
      ? 'animate-butterfly-flutter'
      : variant === 'float'
      ? 'animate-butterfly-float'
      : 'animate-butterfly-ambient';

  return (
    <div
      className={`inline-block pointer-events-none select-none relative ${sizeMap[size]} ${animClass} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)]"
      >
        <defs>
          {/* Main purple gradient for wing centers */}
          <linearGradient id="wingPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="45%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#581C87" />
          </linearGradient>

          {/* Luxury gold gradient for wing contours and body */}
          <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1AA" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6D1F" />
          </linearGradient>

          {/* Deep center shadow */}
          <radialGradient id="wingGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#A855F7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Left Upper Wing */}
        <path
          d="M 50 48 C 42 28 20 16 10 24 C 2 30 2 48 18 58 C 30 64 45 54 50 48 Z"
          fill="url(#wingPurple)"
          stroke="url(#goldTrim)"
          strokeWidth="2"
          className="origin-[50px_50px]"
        />
        {/* Left Upper Wing inner vein */}
        <path
          d="M 46 47 C 34 36 22 28 14 30 C 22 42 32 50 46 47 Z"
          fill="url(#goldTrim)"
          opacity="0.55"
        />

        {/* Right Upper Wing */}
        <path
          d="M 50 48 C 58 28 80 16 90 24 C 98 30 98 48 82 58 C 70 64 55 54 50 48 Z"
          fill="url(#wingPurple)"
          stroke="url(#goldTrim)"
          strokeWidth="2"
          className="origin-[50px_50px]"
        />
        {/* Right Upper Wing inner vein */}
        <path
          d="M 54 47 C 66 36 78 28 86 30 C 78 42 68 50 54 47 Z"
          fill="url(#goldTrim)"
          opacity="0.55"
        />

        {/* Left Lower Wing */}
        <path
          d="M 48 54 C 38 60 22 68 18 78 C 14 86 28 92 38 84 C 44 78 48 64 48 54 Z"
          fill="url(#wingPurple)"
          stroke="url(#goldTrim)"
          strokeWidth="1.7"
        />
        <circle cx="28" cy="80" r="3" fill="url(#goldTrim)" />

        {/* Right Lower Wing */}
        <path
          d="M 52 54 C 62 60 78 68 82 78 C 86 86 72 92 62 84 C 56 78 52 64 52 54 Z"
          fill="url(#wingPurple)"
          stroke="url(#goldTrim)"
          strokeWidth="1.7"
        />
        <circle cx="72" cy="80" r="3" fill="url(#goldTrim)" />

        {/* Butterfly Slender Body (Gold with purple core) */}
        <path
          d="M 50 36 C 48 44 48 66 50 74 C 52 66 52 44 50 36 Z"
          fill="url(#goldTrim)"
        />

        {/* Butterfly Head */}
        <circle cx="50" cy="33" r="3.2" fill="url(#goldTrim)" />

        {/* Left Antenna with gold tip */}
        <path
          d="M 49 32 C 46 25 40 21 34 20"
          stroke="url(#goldTrim)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="34" cy="20" r="1.8" fill="#FFF1AA" />

        {/* Right Antenna with gold tip */}
        <path
          d="M 51 32 C 54 25 60 21 66 20"
          stroke="url(#goldTrim)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="66" cy="20" r="1.8" fill="#FFF1AA" />
      </svg>
    </div>
  );
}
