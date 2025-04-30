"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Sparkles, Settings } from "lucide-react"
import { useState, useEffect } from "react"
import { AIModelSelector } from "@/components/ai-model-selector"
import { fetchUserModelPreferences } from "@/app/actions/ai-models"
import { useLukso } from "@/components/lukso-provider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { createAIPrediction } from "@/app/actions/ai-predictions"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function AIPredictionsHeader() {
  const [timeframe, setTimeframe] = useState("1d")
  const [selectedModels, setSelectedModels] = useState<number[]>([])
  const [asset, setAsset] = useState("LYX")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [useMarketData, setUseMarketData] = useState(true)
  const { universalProfile } = useLukso()
  const { toast } = useToast()

  useEffect(() => {
    async function loadUserPreferences() {
      if (universalProfile) {
        try {
          const preferences = await fetchUserModelPreferences(universalProfile.address)
          if (preferences && Array.isArray(preferences) && preferences.length > 0) {
            if (Array.isArray(preferences)) {
              setSelectedModels(preferences.map((p: any) => p.model.id))
            }
          }
        } catch (error) {
          console.error("Failed to load user preferences:", error)
        }
      }
    }

    loadUserPreferences()
  }, [universalProfile])

  const handleGeneratePrediction = async () => {
    if (selectedModels.length === 0) {
      toast({
        title: "No models selected",
        description: "Please select at least one AI model to generate a prediction.",
        // variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      // Generate predictions for each selected model
      for (const modelId of selectedModels) {
        const { success, prediction, error } = await createAIPrediction(modelId, asset, timeframe)

        if (success) {
          toast({
            title: "Prediction generated",
            description: `Successfully generated a new ${asset} prediction.`,
          })
        } else {
          toast({
            title: "Failed to generate prediction",
            description: error || "An unknown error occurred.",
            // variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Error generating prediction:", error)
      toast({
        title: "Error",
        description: "Failed to generate prediction. Please try again.",
        // variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            AI-Powered Predictions
            <Sparkles className="ml-2 h-5 w-5 text-purple-500" />
          </h1>
          <p className="text-muted-foreground">DeepSeek AI model trained on market data to generate trading signals</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Generate New Prediction</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Generate New AI Prediction</DialogTitle>
                <DialogDescription>Select the asset and timeframe for your new prediction.</DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="asset" className="text-right">
                    Asset
                  </label>
                  <Select value={asset} onValueChange={setAsset}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select asset" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="LYX">LUKSO (LYX)</SelectItem>
                      <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                      <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                      <SelectItem value="SOL">Solana (SOL)</SelectItem>
                      <SelectItem value="AVAX">Avalanche (AVAX)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="timeframe" className="text-right">
                    Timeframe
                  </label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 Hour</SelectItem>
                      <SelectItem value="4h">4 Hours</SelectItem>
                      <SelectItem value="1d">1 Day</SelectItem>
                      <SelectItem value="1w">1 Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="models" className="text-right">
                    AI Models
                  </label>
                  <div className="col-span-3">
                    <AIModelSelector selectedModels={selectedModels} setSelectedModels={setSelectedModels} />
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <div className="text-right">Data Sources</div>
                  <div className="col-span-3 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="market-data"
                        checked={useMarketData}
                        onCheckedChange={(checked) => setUseMarketData(checked === true)}
                      />
                      <Label htmlFor="market-data">Use CoinMarketCap data</Label>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <p className="text-xs text-muted-foreground">
                    DeepSeek models leverage CoinMarketCap metrics for more accurate predictions.
                  </p>
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleGeneratePrediction} disabled={isGenerating}>
                  {isGenerating ? "Generating..." : "Generate Prediction"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[180px]">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last Hour</SelectItem>
              <SelectItem value="4h">Last 4 Hours</SelectItem>
              <SelectItem value="1d">Last Day</SelectItem>
              <SelectItem value="1w">Last Week</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 flex items-center gap-2">
          <AIModelSelector selectedModels={selectedModels} setSelectedModels={setSelectedModels} />
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Model settings</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
