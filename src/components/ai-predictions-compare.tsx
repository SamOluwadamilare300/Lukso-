"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Users } from "lucide-react"

const accuracyData = [
  { month: "Jan", ai: 76, human: 68 },
  { month: "Feb", ai: 82, human: 71 },
  { month: "Mar", ai: 79, human: 75 },
  { month: "Apr", ai: 85, human: 78 },
  { month: "May", ai: 81, human: 80 },
  { month: "Jun", ai: 88, human: 76 },
]

const roiData = [
  { month: "Jan", ai: 12, human: 8 },
  { month: "Feb", ai: 18, human: 14 },
  { month: "Mar", ai: 15, human: 17 },
  { month: "Apr", ai: 22, human: 16 },
  { month: "May", ai: 19, human: 21 },
  { month: "Jun", ai: 25, human: 18 },
]

const assetData = [
  { name: "BTC", ai: 85, human: 78 },
  { name: "ETH", ai: 82, human: 80 },
  { name: "LYX", ai: 88, human: 75 },
  { name: "SOL", ai: 79, human: 72 },
  { name: "AVAX", ai: 76, human: 70 },
]

export function AIPredictionsCompare() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5 text-purple-500" />
          AI vs Human Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="accuracy">
          <TabsList className="mb-4">
            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
            <TabsTrigger value="roi">ROI</TabsTrigger>
            <TabsTrigger value="assets">By Asset</TabsTrigger>
          </TabsList>
          <TabsContent value="accuracy" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="ai"
                  stroke="#8884d8"
                  name="AI Predictions"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="human"
                  stroke="#82ca9d"
                  name="Human Signals"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="roi" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="ai"
                  stroke="#8884d8"
                  name="AI ROI (%)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="human"
                  stroke="#82ca9d"
                  name="Human ROI (%)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="assets" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ai" fill="#8884d8" name="AI Accuracy (%)" />
                <Bar dataKey="human" fill="#82ca9d" name="Human Accuracy (%)" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
