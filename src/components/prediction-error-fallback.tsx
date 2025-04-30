// components/prediction-error-fallback.tsx
"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { useEffect } from "react"

export function PredictionErrorFallback({ 
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Prediction error:", error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center p-8 border border-destructive rounded-lg">
      <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-xl font-bold mb-2">Prediction Failed</h2>
      <p className="text-muted-foreground mb-4 text-center">
        {error.message || "An unexpected error occurred while generating predictions"}
      </p>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
        <Button onClick={reset}>
          Retry Predictions
        </Button>
      </div>
    </div>
  )
}