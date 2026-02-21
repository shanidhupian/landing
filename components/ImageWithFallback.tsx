"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackComponent?: React.ReactNode;
}

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  fallbackComponent,
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
      >
        {fallbackComponent || (
          <svg
            className="w-16 h-16 text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImgError(true)}
    />
  );
}
