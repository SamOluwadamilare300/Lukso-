import { SignalFeed } from "@/components/signal-feed"
import { SignalFilters } from "@/components/signal-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlockchainSignalsList } from "@/components/blockchain-signals-list"

export default function SignalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Signal Feed</h1>
        <Link href="/app/signals/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Signal
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="app" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="app">App Signals</TabsTrigger>
          <TabsTrigger value="blockchain">Blockchain Signals</TabsTrigger>
        </TabsList>
        <TabsContent value="app" className="mt-6">
          <SignalFilters />
          <SignalFeed />
        </TabsContent>
        <TabsContent value="blockchain" className="mt-6">
          <BlockchainSignalsList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
