import type React from "react"

interface CornerLinesProps {
  color?: string
  strokeWidth?: number
  className?: string
}

export const CornerLines: React.FC<CornerLinesProps> = ({
  color = "var(--blue-main)",
  strokeWidth = 2.5,
  className,
}) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {/* Top-left corner */}
    <svg className="absolute top-0 left-0 w-28 h-28 overflow-visible" viewBox="0 0 100 100">
      <path
        d="M5,5 Q15,15 5,38" // Vertical line extending to approx 1/3 down
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        className="opacity-70"
      />
      <path
        d="M5,5 Q15,15 38,5" // Horizontal line extending to approx 1/3 right
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        className="opacity-70"
      />
    </svg>

    {/* Bottom-right corner */}
    <svg className="absolute bottom-0 right-0 w-28 h-28 overflow-visible" viewBox="0 0 100 100">
      <path
        d="M95,95 Q85,85 95,67" // Vertical line extending to approx 1/3 up
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        className="opacity-70"
      />
      <path
        d="M95,95 Q85,85 67,95" // Horizontal line extending to approx 1/3 left
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        className="opacity-70"
      />
    </svg>
  </div>
)
