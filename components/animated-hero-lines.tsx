"use client"

import { useEffect, useState } from "react"

export function AnimatedHeroLines() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="absolute -top-12 -right-12 w-64 h-64 hidden md:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className="overflow-visible"
        style={{ filter: "drop-shadow(0px 2px 4px rgba(162, 197, 253, 0.1))" }}
      >
        {/* Line 1: Diagonal curve */}
        <path
          d="M20,40 Q80,20 140,35 T180,45"
          fill="none"
          stroke="var(--blue-main)"
          strokeWidth="4"
          strokeLinecap="round"
          className={`handmade-line ${isLoaded ? "animate-in" : ""}`}
          style={{ cursor: "help" }}
        />
        {/* Line 2: Wavy line */}
        <path
          d="M15,80 Q60,65 100,75 Q140,85 175,70"
          fill="none"
          stroke="var(--blue-main)"
          strokeWidth="6"
          strokeLinecap="round"
          className={`handmade-line ${isLoaded ? "animate-in" : ""}`}
          style={{ cursor: "help" }}
        />
        {/* Line 3: Organic arc */}
        <path
          d="M25,120 Q70,105 110,115 Q150,125 180,110"
          fill="none"
          stroke="var(--blue-main)"
          strokeWidth="3"
          strokeLinecap="round"
          className={`handmade-line ${isLoaded ? "animate-in" : ""}`}
          style={{ cursor: "help" }}
        />
        {/* Line 4: Shorter, thicker curve */}
        <path
          d="M50,160 Q80,150 120,165"
          fill="none"
          stroke="var(--blue-main)"
          strokeWidth="8"
          strokeLinecap="round"
          className={`handmade-line ${isLoaded ? "animate-in" : ""}`}
          style={{ cursor: "help" }}
        />
      </svg>
    </div>
  )
}
