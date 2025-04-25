import { neon } from "@neondatabase/serverless"

// Create a SQL client with the pooled connection
export const sql = neon(process.env.DATABASE_URL!)

// Helper function to get all AI models
export async function getAIModels() {
  const models = await sql`
    SELECT * FROM ai_models ORDER BY name ASC
  `
  return models
}

// Helper function to get a specific AI model
export async function getAIModel(id: number) {
  const [model] = await sql`
    SELECT * FROM ai_models WHERE id = ${id}
  `
  return model
}

// Helper function to get user's preferred models
export async function getUserModelPreferences(userAddress: string) {
  const preferences = await sql`
    SELECT m.* FROM ai_models m
    JOIN user_model_preferences p ON m.id = p.model_id
    WHERE p.user_address = ${userAddress}
    ORDER BY m.name ASC
  `
  return preferences
}

// Helper function to set user's model preference
export async function setUserModelPreference(userAddress: string, modelId: number, isDefault = false) {
  const result = await sql`
    INSERT INTO user_model_preferences (user_address, model_id, is_default)
    VALUES (${userAddress}, ${modelId}, ${isDefault})
    ON CONFLICT (user_address, model_id) 
    DO UPDATE SET is_default = ${isDefault}
    RETURNING *
  `
  return result
}

// Helper function to remove user's model preference
export async function removeUserModelPreference(userAddress: string, modelId: number) {
  const result = await sql`
    DELETE FROM user_model_preferences
    WHERE user_address = ${userAddress} AND model_id = ${modelId}
    RETURNING *
  `
  return result
}

// Helper function to get AI predictions
export async function getAIPredictions(modelIds: number[] = [], limit = 10) {
  let predictions

  if (modelIds.length > 0) {
    predictions = await sql`
      SELECT p.*, m.name as model_name 
      FROM ai_predictions p
      JOIN ai_models m ON p.model_id = m.id
      WHERE p.model_id = ANY(${modelIds})
      ORDER BY p.created_at DESC
      LIMIT ${limit}
    `
  } else {
    predictions = await sql`
      SELECT p.*, m.name as model_name 
      FROM ai_predictions p
      JOIN ai_models m ON p.model_id = m.id
      ORDER BY p.created_at DESC
      LIMIT ${limit}
    `
  }

  return predictions
}

// Helper function to save an AI prediction
export async function saveAIPrediction(
  modelId: number,
  asset: string,
  action: string,
  confidence: number,
  timeframe: string,
  reasoning: string,
  priceTarget?: number,
) {
  const prediction = await sql`
    INSERT INTO ai_predictions (
      model_id, asset, action, confidence, timeframe, reasoning, price_target
    ) VALUES (
      ${modelId}, ${asset}, ${action}, ${confidence}, ${timeframe}, ${reasoning}, ${priceTarget || null}
    )
    RETURNING *
  `
  return prediction
}

// Helper function to update prediction performance
export async function updatePredictionPerformance(id: number, performance: number, verified = true) {
  const result = await sql`
    UPDATE ai_predictions
    SET performance = ${performance}, verified = ${verified}
    WHERE id = ${id}
    RETURNING *
  `
  return result
}
