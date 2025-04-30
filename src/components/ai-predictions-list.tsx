"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, BrainCircuit, Share2, ThumbsUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { fetchAIPredictions } from "@/app/actions/ai-predictions"
import { useToast } from "@/hooks/use-toast"


type Prediction = {
  id: number
  modelId: number
  model: {
    name: string
  }
  asset: string
  action: string
  confidence: number
  timeframe: string
  reasoning: string
  priceTarget: number | null
  createdAt: string
  performance: number | null
  verified: boolean
  liked?: boolean
  likes?: number
}

interface AIPredictionsListProps {
  selectedModels?: number[]
}

export function AIPredictionsList({ selectedModels = [] }: AIPredictionsListProps) {
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    async function loadPredictions() {
      setLoading(true)
      try {
        const { success, predictions: fetchedPredictions, error } = await fetchAIPredictions(selectedModels)

        if (success && fetchedPredictions) {
          // Add UI-specific properties
          const enhancedPredictions = fetchedPredictions.map((p: any) => ({
            ...p,
            liked: false,
            likes: Math.floor(Math.random() * 30) + 1, // Mock data for likes
          }))

          setPredictions(enhancedPredictions)
        } else {
          toast({
            title: "Failed to load predictions",
            description: error || "An unknown error occurred",
            // variant: "destructive",
          })
        }
      } catch (error) {
        console.error("Error loading predictions:", error)
        toast({
          title: "Error",
          description: "Failed to load predictions. Please try again.",
          // variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadPredictions()
  }, [selectedModels, toast])

  const toggleLike = (id: number) => {
    setPredictions(
      predictions.map((prediction) => {
        if (prediction.id === id) {
          return {
            ...prediction,
            likes: prediction.liked ? (prediction.likes || 1) - 1 : (prediction.likes || 0) + 1,
            liked: !prediction.liked,
          }
        }
        return prediction
      }),
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 60) {
      return `${diffMins}m ago`
    } else if (diffHours < 24) {
      return `${diffHours}h ago`
    } else {
      return `${diffDays}d ago`
    }
  }

  const formatPerformance = (performance: number | null) => {
    if (performance === null) return "Pending"
    return performance > 0 ? `+${performance}%` : `${performance}%`
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center">
          <BrainCircuit className="mr-2 h-5 w-5 text-purple-500" />
          AI Signal Predictions
          {selectedModels.length > 0 && (
            <Badge variant="outline" className="ml-2">
              {selectedModels.length} model{selectedModels.length !== 1 ? "s" : ""} selected
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : predictions.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-center">
            <BrainCircuit className="h-10 w-10 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No predictions available</h3>
            <p className="text-sm text-muted-foreground">
              {selectedModels.length === 0
                ? "Please select at least one AI model to view predictions"
                : "No predictions from the selected models yet"}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {predictions.map((prediction) => (
              <div key={prediction.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        prediction.action === "buy"
                          ? "default"
                          : prediction.action === "sell"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {prediction.action.toUpperCase()}
                    </Badge>
                    <span className="font-bold">{prediction.asset}</span>
                    <Badge variant="outline">{prediction.timeframe}</Badge>
                  </div>
                  <span
                    className={`flex items-center ${
                      prediction.performance === null
                        ? "text-muted-foreground"
                        : prediction.performance > 0
                          ? "text-green-500"
                          : "text-red-500"
                    }`}
                  >
                    {prediction.performance === null ? (
                      "Pending"
                    ) : prediction.performance > 0 ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    <span>{formatPerformance(prediction.performance)}</span>
                  </span>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span>Confidence</span>
                    <span className="font-medium">{prediction.confidence}%</span>
                  </div>
                  <Progress value={prediction.confidence} className="h-2" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{prediction.reasoning}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BrainCircuit className="h-3 w-3" />
                    <span>{prediction.model.name}</span>
                  </div>
                  <span>{formatDate(prediction.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={prediction.liked ? "text-primary" : ""}
                    onClick={() => toggleLike(prediction.id)}
                  >
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    {prediction.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-1 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="ml-auto">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
