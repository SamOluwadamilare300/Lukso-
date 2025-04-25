import { AIPredictionsHeader } from "@/components/ai-predictions-header"
import { AIPredictionsList } from "@/components/ai-predictions-list"
import { AIPredictionsStats } from "@/components/ai-predictions-stats"
import { AIPredictionsCompare } from "@/components/ai-predictions-compare"
import { Button } from "@/components/ui/button"
import { BrainCircuit } from "lucide-react"
import Link from "next/link"

export default function AIPredictionsPage() {
  return (
    <div className="space-y-6">
      <AIPredictionsHeader />
      <div className="flex justify-end">
        <Link href="/dashboard/ai-predictions/models">
          <Button variant="outline" className="flex items-center gap-2">
            <BrainCircuit className="h-4 w-4" />
            Manage AI Models
          </Button>
        </Link>
      </div>
      <AIPredictionsStats />
      <div className="grid gap-6 md:grid-cols-2">
        <AIPredictionsList />
        <AIPredictionsCompare />
      </div>
    </div>
  )
}
