"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { createSignal } from "@/lib/lukso-contract"
import { useToast } from "@/hooks/use-toast"


export function CreateBlockchainSignalForm() {
  const [asset, setAsset] = useState("")
  const [action, setAction] = useState("buy")
  const [timeframe, setTimeframe] = useState("86400") // 1 day in seconds
  const [priceTarget, setPriceTarget] = useState("")
  const [confidenceLevel, setConfidenceLevel] = useState([75])
  const [analysis, setAnalysis] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!asset || !action || !timeframe || !priceTarget || !analysis) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        // variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      await createSignal(asset, action, Number.parseInt(timeframe), priceTarget, confidenceLevel[0], analysis)

      toast({
        title: "Success",
        description: "Your trading signal has been created on the blockchain",
      })

      // Reset form
      setAsset("")
      setAction("buy")
      setTimeframe("86400")
      setPriceTarget("")
      setConfidenceLevel([75])
      setAnalysis("")
    } catch (error) {
      console.error("Error creating signal:", error)
      toast({
        title: "Error",
        description: "Failed to create signal. Please check your wallet connection and try again.",
        // variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create On-Chain Trading Signal</CardTitle>
        <CardDescription>
          Create a new trading signal that will be stored on the LUKSO blockchain as an LSP7 Digital Asset
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="asset">Asset Address</Label>
            <Input id="asset" placeholder="0x..." value={asset} onChange={(e) => setAsset(e.target.value)} required />
            <p className="text-xs text-muted-foreground">
              Enter the contract address of the asset you're creating a signal for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="action">Action</Label>
              <Select value={action} onValueChange={setAction} required>
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

            <div className="space-y-2">
              <Label htmlFor="timeframe">Timeframe</Label>
              <Select value={timeframe} onValueChange={setTimeframe} required>
                <SelectTrigger id="timeframe">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3600">1 Hour</SelectItem>
                  <SelectItem value="14400">4 Hours</SelectItem>
                  <SelectItem value="86400">1 Day</SelectItem>
                  <SelectItem value="604800">1 Week</SelectItem>
                  <SelectItem value="2592000">1 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priceTarget">Price Target</Label>
            <Input
              id="priceTarget"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={priceTarget}
              onChange={(e) => setPriceTarget(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="confidenceLevel">Confidence Level</Label>
              <span className="text-sm">{confidenceLevel[0]}%</span>
            </div>
            <Slider
              id="confidenceLevel"
              min={1}
              max={100}
              step={1}
              value={confidenceLevel}
              onValueChange={setConfidenceLevel}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="analysis">Analysis</Label>
            <Textarea
              id="analysis"
              placeholder="Provide your detailed analysis and reasoning for this signal..."
              rows={5}
              value={analysis}
              onChange={(e) => setAnalysis(e.target.value)}
              required
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Signal...
            </>
          ) : (
            "Create On-Chain Signal"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
