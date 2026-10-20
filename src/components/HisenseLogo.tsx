import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean; // backwards compatible
  light?: boolean;
}

export const HisenseLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  light = false,
}) => {
  // Height sizing for the official transparent logo (Aspect ratio ~1.68)
  const heightMap = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-10 sm:h-11 md:h-12',
    xl: 'h-14 sm:h-16',
  };

  const imageElement = (
    <img
      src="/hisense-logo.png"
      alt="Hisense International"
      className={`${heightMap[size]} w-auto object-contain transition-transform duration-200 hover:scale-105`}
      loading="eager"
    />
  );

  // When used on dark backgrounds (such as footer), wrap in a subtle clinical white container to preserve authentic corporate colors
  if (light) {
    return (
      <div className={`inline-flex items-center bg-white/95 px-3 py-1.5 rounded-2xl shadow-sm border border-slate-200/80 ${className}`}>
        {imageElement}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {imageElement}
    </div>
  );
};
