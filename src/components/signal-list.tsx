
"use client"

import { useAccount } from "wagmi"
import { useUniversalProfile } from "@/hooks"
import type { Signal } from "@/types"
import { SignalCard } from "@/components/signal-card"

interface SignalListProps {
  signals: Signal[]
}

export function SignalList({ signals }: SignalListProps) {
  const { address } = useAccount()
  const { profile } = useUniversalProfile(address, "https://rpc.mainnet.lukso.network")

  if (signals.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No signals found. Create your first signal to get started.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal) => (
          <SignalCard
            key={signal.id}
            signal={signal}
            userAddress={address}
            userName={profile?.name}
          />
        ))}
      </div>
    </div>
  )
}

