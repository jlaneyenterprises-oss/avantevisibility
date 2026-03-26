export default function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Network nodes and connections — abstract AI/search visualization */}
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A853" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#01696F" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#01696F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#01696F" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#01696F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#01696F" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      <line x1="200" y1="150" x2="400" y2="250" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="400" y1="250" x2="600" y2="180" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="400" y1="250" x2="350" y2="420" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="600" y1="180" x2="650" y2="380" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="200" y1="150" x2="150" y2="350" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="150" y1="350" x2="350" y2="420" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="350" y1="420" x2="650" y2="380" stroke="url(#line-grad)" strokeWidth="1.5" />
      <line x1="600" y1="180" x2="720" y2="280" stroke="url(#line-grad)" strokeWidth="1" />
      <line x1="200" y1="150" x2="100" y2="230" stroke="url(#line-grad)" strokeWidth="1" />
      <line x1="650" y1="380" x2="720" y2="280" stroke="url(#line-grad)" strokeWidth="1" />
      <line x1="100" y1="230" x2="150" y2="350" stroke="url(#line-grad)" strokeWidth="1" />

      {/* Glow effects */}
      <circle cx="400" cy="250" r="80" fill="url(#glow1)" />
      <circle cx="200" cy="150" r="50" fill="url(#glow2)" />
      <circle cx="600" cy="180" r="60" fill="url(#glow2)" />

      {/* Main nodes */}
      <circle cx="400" cy="250" r="8" fill="#D4A853" opacity="0.9" />
      <circle cx="200" cy="150" r="6" fill="#01696F" opacity="0.8" />
      <circle cx="600" cy="180" r="6" fill="#01696F" opacity="0.8" />
      <circle cx="350" cy="420" r="5" fill="#01696F" opacity="0.7" />
      <circle cx="650" cy="380" r="5" fill="#01696F" opacity="0.7" />
      <circle cx="150" cy="350" r="4" fill="#01696F" opacity="0.6" />
      <circle cx="720" cy="280" r="4" fill="#01696F" opacity="0.5" />
      <circle cx="100" cy="230" r="3" fill="#01696F" opacity="0.4" />

      {/* Outer rings on main nodes */}
      <circle cx="400" cy="250" r="16" stroke="#D4A853" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="400" cy="250" r="28" stroke="#D4A853" strokeWidth="0.5" fill="none" opacity="0.15" />
      <circle cx="200" cy="150" r="12" stroke="#01696F" strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="600" cy="180" r="12" stroke="#01696F" strokeWidth="0.8" fill="none" opacity="0.3" />

      {/* Floating dots — scattered data particles */}
      <circle cx="300" cy="200" r="2" fill="#ffffff" opacity="0.2" />
      <circle cx="500" cy="300" r="1.5" fill="#ffffff" opacity="0.15" />
      <circle cx="450" cy="150" r="2" fill="#ffffff" opacity="0.2" />
      <circle cx="250" cy="380" r="1.5" fill="#ffffff" opacity="0.15" />
      <circle cx="550" cy="420" r="2" fill="#ffffff" opacity="0.2" />
      <circle cx="700" cy="220" r="1.5" fill="#ffffff" opacity="0.15" />
      <circle cx="130" cy="280" r="1.5" fill="#ffffff" opacity="0.12" />
      <circle cx="480" cy="380" r="1" fill="#ffffff" opacity="0.1" />
    </svg>
  );
}
