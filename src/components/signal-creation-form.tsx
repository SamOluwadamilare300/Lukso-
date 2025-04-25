"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BrainCircuit } from "lucide-react"
import { Switch } from "./ui/switch"

export function SignalCreationForm() {
  const router = useRouter()
  const [confidence, setConfidence] = useState([50])
  const [useAI, setUseAI] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would create a signal
    // and store it on-chain using LUKSO's standards
    router.push("/dashboard/signals")
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="use-ai" checked={useAI} onCheckedChange={setUseAI} />
              <Label htmlFor="use-ai" className="flex items-center">
                <BrainCircuit className="mr-2 h-4 w-4 text-purple-500" />
                Use AI assistance
              </Label>
            </div>
            {useAI && (
              <Button type="button" variant="outline" size="sm">
                Generate AI Recommendation
              </Button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="asset">Asset</Label>
              <Select required>
                <SelectTrigger id="asset">
                  <SelectValue placeholder="Select asset" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                  <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                  <SelectItem value="lyx">LUKSO (LYX)</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="action">Action</Label>
              <Select required>
                <SelectTrigger id="action">
                  <SelectValue placeholder="Select action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="sell">Sell</SelectItem>
                  <SelectItem value="hold">Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="timeframe">Timeframe</Label>
              <Select required>
                <SelectTrigger id="timeframe">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">1 Hour</SelectItem>
                  <SelectItem value="4h">4 Hours</SelectItem>
                  <SelectItem value="1d">1 Day</SelectItem>
                  <SelectItem value="1w">1 Week</SelectItem>
                  <SelectItem value="1m">1 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price-target">Price Target (optional)</Label>
              <Input id="price-target" type="text" placeholder="e.g. $65,000" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="confidence">Confidence Level</Label>
              <span className="text-sm text-muted-foreground">{confidence[0]}%</span>
            </div>
            <Slider id="confidence" min={0} max={100} step={1} value={confidence} onValueChange={setConfidence} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="analysis">Analysis & Rationale</Label>
            <Textarea
              id="analysis"
              placeholder="Provide your detailed analysis and reasoning for this signal..."
              rows={5}
              required
            />
            {useAI && (
              <div className="mt-2 p-3 bg-purple-500/10 rounded-md border border-purple-500/20">
                <div className="flex items-center text-sm font-medium text-purple-500 mb-2">
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  AI Suggestion
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on current market conditions, technical indicators suggest a bullish trend for this asset. RSI
                  shows oversold conditions and MACD indicates a potential crossover. Consider including volume analysis
                  to strengthen your signal.
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button type="submit" size="lg">
              Create Signal
            </Button>
            <Button type="button" variant="outline" size="lg">
              Preview
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
