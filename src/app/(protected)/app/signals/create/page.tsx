import { SignalCreationForm } from "@/components/signal-creation-form"

export default function CreateSignalPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Create Signal</h1>
      <p className="text-muted-foreground">
        Share your trading insights with the LUKSO community. Your signals are tied to your Universal Profile and
        contribute to your reputation.
      </p>
      <SignalCreationForm />
    </div>
  )
}
