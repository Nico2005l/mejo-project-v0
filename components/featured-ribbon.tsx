interface FeaturedRibbonProps {
  text?: string
  className?: string
}

export function FeaturedRibbon({ text = "Destacado", className = "" }: FeaturedRibbonProps) {
  return (
    <div className={`featured-ribbon ${className}`}>
      <div className="featured-ribbon-content">
        <span className="featured-ribbon-text">{text}</span>
      </div>
    </div>
  )
}
