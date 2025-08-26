"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, width, height, className, priority = false }: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <span className="text-gray-400 text-sm">Cargando...</span>
        </div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc("/placeholder.svg?height=400&width=400&text=" + encodeURIComponent(alt))
          setIsLoading(false)
        }}
      />
    </div>
  )
}
