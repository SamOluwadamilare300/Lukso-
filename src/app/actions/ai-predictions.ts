"use server"

import { revalidatePath } from "next/cache"
import { getAIPredictions, saveAIPrediction, getAIModel } from "@/lib/db"
import { generatePrediction } from "@/lib/ai"

export async function fetchAIPredictions(modelIds: number[] = [], limit = 10) {
  try {
    const predictions = await getAIPredictions(modelIds, limit)
    return { success: true, predictions }
  } catch (error) {
    console.error("Error fetching AI predictions:", error)
    return { success: false, error: "Failed to fetch predictions" }
  }
}

export async function createAIPrediction(modelId: number, asset: string, timeframe: string) {
  try {
    // Get the model details
    const model = await getAIModel(modelId)
    if (!model) {
      return { success: false, error: "Model not found" }
    }

    // Generate prediction using Grok
    const prediction = await generatePrediction(asset, timeframe, model.model_type, model.parameters)

    // Save prediction to database
    const savedPrediction = await saveAIPrediction(
      modelId,
      asset,
      prediction.action,
      prediction.confidence,
      timeframe,
      prediction.reasoning,
      prediction.priceTarget,
    )

    revalidatePath("/dashboard/ai-predictions")

    return { success: true, prediction: savedPrediction[0] }
  } catch (error) {
    console.error("Error creating AI prediction:", error)
    return { success: false, error: "Failed to create prediction" }
  }
}
