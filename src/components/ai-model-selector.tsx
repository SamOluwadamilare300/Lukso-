"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"


export type AIModel = {
  updated_at: string | number | Date
  id: number
  name: string
  description?: string
  model_type: string
  parameters: any
  is_active: boolean
  createdAt?: string
  updatedAt?: string
}

interface AIModelSelectorProps {
  selectedModels: number[]
  setSelectedModels: (models: number[]) => void
}

export function AIModelSelector({ selectedModels, setSelectedModels }: AIModelSelectorProps) {
  const [open, setOpen] = useState(false)
  const [models, setModels] = useState<AIModel[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    async function loadModels() {
      try {
        const response = await fetch("/api/ai-models")
        if (!response.ok) {
          throw new Error(`Failed to fetch models: ${response.statusText}`)
        }

        const data = await response.json()
        if (data.success && data.models) {
          setModels(data.models)
        }
      } catch (error) {
        console.error("Failed to load AI models:", error)
        toast({
          title: "Error loading models",
          description: "Could not load AI models. Please try again later.",
          // variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadModels()
  }, [toast])

  const toggleModel = (modelId: number) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter((id) => id !== modelId))
    } else {
      setSelectedModels([...selectedModels, modelId])
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between" disabled={loading}>
          {loading
            ? "Loading models..."
            : selectedModels.length === 0
              ? "Select AI models..."
              : `${selectedModels.length} model${selectedModels.length > 1 ? "s" : ""} selected`}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <Command>
          <CommandInput placeholder="Search AI models..." />
          <CommandList>
            <CommandEmpty>No models found.</CommandEmpty>
            <CommandGroup>
              {models.map((model) => (
                <CommandItem
                  key={model.id}
                  value={model.name}
                  onSelect={() => toggleModel(model.id)}
                  className="flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span>{model.name}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {model.model_type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6 mr-2">
                            <Info className="h-3 w-3" />
                            <span className="sr-only">Model info</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="max-w-[250px]">
                          <p className="text-xs">{model.description || "No description available"}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span
                      className={cn(
                        "flex h-4 w-4 items-center justify-center rounded-sm border",
                        selectedModels.includes(model.id) ? "bg-primary text-primary-foreground" : "opacity-50",
                      )}
                    >
                      {selectedModels.includes(model.id) && <Check className="h-3 w-3" />}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
