"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowDown, ArrowUp, MessageSquare, ThumbsUp, Share2 } from "lucide-react"

export function SignalFeed() {
  const [signals, setSignals] = useState([
    {
      id: 1,
      user: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        address: "0x1234...5678",
      },
      asset: "BTC",
      action: "buy",
      confidence: "high",
      timeframe: "1d",
      created: "2h ago",
      performance: "+5.2%",
      content:
        "Bitcoin is showing strong support at the $60k level. Technical indicators suggest a breakout to $65k is imminent. This is a high-confidence buy signal with a 1-day timeframe.",
      likes: 24,
      comments: 5,
      liked: false,
    },
    {
      id: 2,
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        address: "0x8765...4321",
      },
      asset: "ETH",
      action: "sell",
      confidence: "medium",
      timeframe: "4h",
      created: "5h ago",
      performance: "-2.1%",
      content:
        "Ethereum is approaching resistance at $3,500. With the upcoming protocol changes and market uncertainty, I recommend taking profits. Medium confidence with a 4-hour timeframe.",
      likes: 18,
      comments: 7,
      liked: true,
    },
    {
      id: 3,
      user: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        address: "0x5678...9012",
      },
      asset: "LYX",
      action: "buy",
      confidence: "high",
      timeframe: "1w",
      created: "1d ago",
      performance: "+8.7%",
      content:
        "LUKSO (LYX) is showing incredible strength after the recent network upgrade. The Universal Profile adoption is accelerating, and I expect significant price appreciation over the next week. High confidence buy.",
      likes: 42,
      comments: 12,
      liked: false,
    },
  ])

  const toggleLike = (id: number) => {
    setSignals(
      signals.map((signal) => {
        if (signal.id === id) {
          return {
            ...signal,
            likes: signal.liked ? signal.likes - 1 : signal.likes + 1,
            liked: !signal.liked,
          }
        }
        return signal
      }),
    )
  }

  return (
    <div className="space-y-6">
      {signals.map((signal) => (
        <Card key={signal.id}>
          <CardHeader className="pb-3">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={signal.user.avatar || "/placeholder.svg"} alt={signal.user.name} />
                <AvatarFallback>{signal.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{signal.user.name}</p>
                    <p className="text-xs text-muted-foreground">{signal.user.address}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{signal.created}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant={signal.action === "buy" ? "default" : "destructive"}>
                    {signal.action.toUpperCase()}
                  </Badge>
                  <span className="font-bold">{signal.asset}</span>
                  <Badge variant="outline">{signal.timeframe}</Badge>
                  <Badge variant="secondary">{signal.confidence}</Badge>
                  <span
                    className={`ml-auto flex items-center ${
                      signal.performance.startsWith("+") ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {signal.performance.startsWith("+") ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    <span>{signal.performance}</span>
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{signal.content}</p>
          </CardContent>
          <CardFooter className="border-t pt-3">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={signal.liked ? "text-primary" : ""}
                onClick={() => toggleLike(signal.id)}
              >
                <ThumbsUp className="mr-1 h-4 w-4" />
                {signal.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="mr-1 h-4 w-4" />
                {signal.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="ml-auto">
                View Details
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
