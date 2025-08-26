"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === "navigation") {
          const navEntry = entry as PerformanceNavigationTiming
          console.log("🚀 Navigation Timing:", {
            "DOM Content Loaded": navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            "Load Complete": navEntry.loadEventEnd - navEntry.loadEventStart,
            "First Paint": navEntry.responseEnd - navEntry.requestStart,
          })
        }

        if (entry.entryType === "paint") {
          console.log(`🎨 ${entry.name}:`, entry.startTime)
        }

        if (entry.entryType === "largest-contentful-paint") {
          console.log("📏 LCP:", entry.startTime)
        }
      })
    })

    observer.observe({ entryTypes: ["navigation", "paint", "largest-contentful-paint"] })

    // Monitor memory usage
    if ("memory" in performance) {
      const memoryInfo = (performance as any).memory
      console.log("💾 Memory Usage:", {
        Used: `${Math.round(memoryInfo.usedJSHeapSize / 1048576)} MB`,
        Total: `${Math.round(memoryInfo.totalJSHeapSize / 1048576)} MB`,
        Limit: `${Math.round(memoryInfo.jsHeapSizeLimit / 1048576)} MB`,
      })
    }

    return () => observer.disconnect()
  }, [])

  return null
}
