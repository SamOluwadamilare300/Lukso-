import { xai } from "@ai-sdk/xai"
import { generateText } from "ai"

type ModelParameters = {
  temperature?: number
  contextWindow?: number
}

export async function generatePrediction(
  asset: string,
  timeframe: string,
  modelType = "grok-3-mini-beta",
  parameters: ModelParameters = {},
) {
  try {
    const { temperature = 0.7 } = parameters

    const prompt = `
      You are an expert crypto market analyst specializing in ${asset}. 
      Based on the current market conditions, provide a trading signal prediction for ${asset} with a ${timeframe} timeframe.
      
      Your response should be in this JSON format:
      {
        "action": "buy|sell|hold",
        "confidence": <number between 1-100>,
        "reasoning": "<detailed analysis explaining your prediction>",
        "priceTarget": <optional price target>
      }
      
      Only respond with the JSON object, no additional text.
    `

    const { text } = await generateText({
      model: xai(modelType),
      prompt,
      temperature,
    })

    try {
      return JSON.parse(text)
    } catch (e) {
      console.error("Failed to parse AI response as JSON:", text)
      throw new Error("Invalid AI response format")
    }
  } catch (error) {
    console.error("Error generating prediction:", error)
    throw error
  }
}
