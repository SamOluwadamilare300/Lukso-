import { SignalFeed } from "@/components/signal-feed"
import { SignalFilters } from "@/components/signal-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function SignalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Signal Feed</h1>
        <Link href="/dashboard/signals/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Signal
          </Button>
        </Link>
      </div>
      <SignalFilters />
      <SignalFeed />
    </div>
  )
}
