"use client"

import { useState, useEffect } from "react"
import { Check, ChevronDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { fetchAIModels } from "@/app/actions/ai-models"
import { useLukso } from "@/components/lukso-provider"

export type AIModel = {
  id: number
  name: string
  description: string
  model_type: string
  parameters: any
  created_at: string
  updated_at: string
}

interface AIModelSelectorProps {
  selectedModels: number[]
  setSelectedModels: (models: number[]) => void
}

export function AIModelSelector({ selectedModels, setSelectedModels }: AIModelSelectorProps) {
  const [open, setOpen] = useState(false)
  const [models, setModels] = useState<AIModel[]>([])
  const [loading, setLoading] = useState(true)
  const { universalProfile } = useLukso()

  useEffect(() => {
    async function loadModels() {
      try {
        const { success, models: fetchedModels } = await fetchAIModels()
        if (success && fetchedModels) {
          setModels(fetchedModels.map(model => ({
            id: model.id,
            name: model.name,
            description: model.description,
            model_type: model.model_type,
            parameters: model.parameters,
            created_at: model.created_at,
            updated_at: model.updated_at,
          } as AIModel)))
        }
      } catch (error) {
        console.error("Failed to load AI models:", error)
      } finally {
        setLoading(false)
      }
    }

    loadModels()
  }, [])

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
                          <p className="text-xs">{model.description}</p>
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
