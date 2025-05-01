import { ethers } from "ethers"
import { logger } from "./logger"

// ABI for the TradingSignals contract
export const TRADING_SIGNALS_ABI = [
  "function signalCount() view returns (uint256)",
  "function signals(uint256) view returns (address asset, string action, uint32 timeframe, uint128 priceTarget, uint16 confidenceLevel, bytes analysis, uint256 timestamp)",
  "function createTradingSignal(address _asset, string _action, uint32 _timeframe, uint128 _priceTarget, uint16 _confidenceLevel, bytes _analysis)",
  "event NewSignal(uint256 indexed signalId, address indexed asset, string action, uint32 timeframe, uint128 priceTarget, uint16 confidenceLevel, bytes analysis)",
]

// Replace with your actual contract address
export const TRADING_SIGNALS_ADDRESS = "0xBEcee847A7F51693bdB02CBA4C57A75372278103" // Replace with your actual contract address

export type Signal = {
  id: number
  asset: string
  action: string
  timeframe: number
  priceTarget: string
  confidenceLevel: number
  analysis: string
  timestamp: number
  formattedTimestamp: string
}

export async function getProvider() {
  // Check if window.ethereum exists (Universal Profile browser extension or MetaMask)
  if (typeof window !== "undefined" && window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" })
      return new ethers.providers.Web3Provider(window.ethereum)
    } catch (error) {
      logger.error("User denied account access", error as Error)
      throw new Error("Please connect your wallet to continue")
    }
  } else {
    throw new Error("No Ethereum provider found. Please install the Universal Profile browser extension")
  }
}

export async function getSignalCount() {
  try {
    const provider = await getProvider()
    const contract = new ethers.Contract(TRADING_SIGNALS_ADDRESS, TRADING_SIGNALS_ABI, provider)
    const count = await contract.signalCount()
    return count.toNumber()
  } catch (error) {
    logger.error("Error getting signal count:", error as Error)
    throw error
  }
}

export async function getSignal(signalId: number): Promise<Signal> {
  try {
    const provider = await getProvider()
    const contract = new ethers.Contract(TRADING_SIGNALS_ADDRESS, TRADING_SIGNALS_ABI, provider)
    const signal = await contract.signals(signalId)

    // Format the timestamp
    const date = new Date(signal.timestamp.toNumber() * 1000)
    const formattedTimestamp = date.toLocaleString()

    // Format the price target (convert from wei to a readable format)
    const priceTarget = ethers.utils.formatUnits(signal.priceTarget, 18)

    // Convert the analysis from bytes to string (assuming it's UTF-8 encoded)
    const analysis = ethers.utils.toUtf8String(signal.analysis)

    return {
      id: signalId,
      asset: signal.asset,
      action: signal.action,
      timeframe: signal.timeframe,
      priceTarget,
      confidenceLevel: signal.confidenceLevel,
      analysis,
      timestamp: signal.timestamp.toNumber(),
      formattedTimestamp,
    }
  } catch (error) {
    logger.error(`Error getting signal ${signalId}:`, error as Error)
    throw error
  }
}

export async function getAllSignals(): Promise<Signal[]> {
  try {
    const count = await getSignalCount()
    const signals: Signal[] = []

    for (let i = 1; i <= count; i++) {
      try {
        const signal = await getSignal(i)
        signals.push(signal)
      } catch (error) {
        logger.error(`Error getting signal ${i}:`, error as Error)
        // Continue with the next signal
      }
    }

    return signals
  } catch (error) {
    logger.error("Error getting all signals:", error as Error)
    throw error
  }
}

export async function createSignal(
  asset: string,
  action: string,
  timeframe: number,
  priceTarget: string,
  confidenceLevel: number,
  analysis: string,
) {
  try {
    const provider = await getProvider()
    const signer = provider.getSigner()
    const contract = new ethers.Contract(TRADING_SIGNALS_ADDRESS, TRADING_SIGNALS_ABI, signer)

    // Convert the price target to wei
    const priceTargetWei = ethers.utils.parseUnits(priceTarget, 18)

    // Convert the analysis to bytes
    const analysisBytes = ethers.utils.toUtf8Bytes(analysis)

    // Send the transaction
    const tx = await contract.createTradingSignal(
      asset,
      action,
      timeframe,
      priceTargetWei,
      confidenceLevel,
      analysisBytes,
    )

    // Wait for the transaction to be mined
    const receipt = await tx.wait()
    return receipt
  } catch (error) {
    logger.error("Error creating signal:", error as Error)
    throw error
  }
}
