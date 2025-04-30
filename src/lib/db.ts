import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function getAIModels() {
  return prisma.aIModel.findMany({
    where: {
      is_active: true,
    },
    select: {
      id: true,
      name: true,
      model_type: true,
      parameters: true,
      description: true,
      is_active: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      name: "asc",
    },
  })
}

async function getUserModelPreferences(userAddress: string) {
  return prisma.userModelPreference.findMany({
    where: {
      user_address: userAddress,
    },
    include: {
      model: true,
    },
  })
}

async function setUserModelPreference(userAddress: string, modelId: number, isDefault = false) {
  return prisma.userModelPreference.upsert({
    where: {
      user_address_model_id: {
        user_address: userAddress,
        model_id: modelId,
      },
    },
    update: {
      is_default: isDefault,
    },
    create: {
      user_address: userAddress,
      model_id: modelId,
      is_default: isDefault,
    },
  })
}

async function removeUserModelPreference(userAddress: string, modelId: number) {
  return prisma.userModelPreference.delete({
    where: {
      user_address_model_id: {
        user_address: userAddress,
        model_id: modelId,
      },
    },
  })
}

async function getAIModel(modelId: number) {
  return prisma.aIModel.findUnique({
    where: {
      id: modelId,
    },
  })
}

async function saveAIPrediction(
  modelId: number,
  modelType: string,
  asset: string,
  confidence: number,
  action: string,
  reasoning: string,
  p0: number,
  model: string,
  timeframe: string,
  priceTarget: number | null,
) {
  return prisma.aIPrediction.create({
    data: {
      modelId,
      modelType,
      asset,
      confidence,
      action,
      reasoning,
      p0,
      model,
      timeframe,
      priceTarget,
    },
  })
}

async function getAIPredictions(modelIds: number[] = [], limit = 10) {
  return prisma.aIPrediction.findMany({
    where: {
      modelId: {
        in: modelIds.length > 0 ? modelIds : undefined,
      },
    },
    include: {
      model: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  })
}

export {
  prisma,
  getAIModels,
  getUserModelPreferences,
  setUserModelPreference,
  removeUserModelPreference,
  getAIModel,
  saveAIPrediction,
  getAIPredictions,
}
