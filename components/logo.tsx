'use me';
import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'light-bg';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSlogan?: boolean;
}

export default function AscorynLogo({
  variant = 'full',
  size = 'md',
  className = '',
  showSlogan = true,
}: LogoProps) {
  // Dimensions scaling
  const scaleMap = {
    sm: { height: 32, iconSize: 28, textClass: 'text-lg', sloganClass: 'text-[9px]' },
    md: { height: 42, iconSize: 38, textClass: 'text-2xl', sloganClass: 'text-[11px]' },
    lg: { height: 56, iconSize: 52, textClass: 'text-3xl', sloganClass: 'text-[13px]' },
    xl: { height: 72, iconSize: 66, textClass: 'text-4xl', sloganClass: 'text-[15px]' },
  };

  const currentScale = scaleMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Emblem */}
      <img
        src="/logo1.png"
        alt="Ascoryn Tech Logo"
        width={currentScale.iconSize * 1.5}
        height={currentScale.iconSize * 1.5}
        className="transition-transform duration-300 hover:scale-105 object-contain"
      />

      {/* Typography Section */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-extrabold tracking-tight ${currentScale.textClass} flex items-center`}>
            <span className="text-slate-900 dark:text-white transition-colors duration-300">Ascoryn</span>
            <span className="text-[#06B6D4] ml-1.5 font-bold">Tech</span>
          </div>
          {showSlogan && (
            <span className={`text-slate-600 dark:text-slate-400 font-medium tracking-wide mt-1 transition-colors duration-300 ${currentScale.sloganClass}`}>
              Innovating for Tomorrow
            </span>
          )}
        </div>
      )}
    </div>
  );
}
