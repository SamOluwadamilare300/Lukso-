// Stock market data types
export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  pe: number;
  sector: string;
  lastUpdated: string;
}
export interface TokenData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  signalStrength: number;
  category: string;
  lastUpdated: string;
  socialSentiment?: number;
}

// Update other interfaces as needed...
export interface MarketIndex {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

export interface MarketSummary {
  advancers: number;
  decliners: number;
  unchanged: number;
  totalVolume: number;
  marketTrend: 'bullish' | 'bearish' | 'neutral';
}

export interface StockHistoricalData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface SectorPerformance {
  sector: string;
  change: number;
  divYield?: number;
  volume?: number;
  industries?: string[];
  stockCount?: number;
  performance?: {
    week1: number;
    month1: number;
    month3: number;
    month6: number;
    ytd: number;
    year1: number;
    year5: number;
    year10: number;
    allTime: number;
  };
  analysis?: {
    rsi: number;
    macd: {
      value: number;
      signal: number;
      histogram: number;
    };
    sma: {
      sma20: number;
      sma50: number;
      sma200: number;
    };
    ema: {
      ema12: number;
      ema26: number;
    };
    bb: {
      upper: number;
      middle: number;
      lower: number;
    };
  };
}

export interface ChartDataItem {
  date: string;
  price: number;
  volume: number;
}

export interface TechnicalIndicator {
  id: string;
  name: string;
  description: string;
  type: 'momentum' | 'trend' | 'volatility' | 'volume';
}

export interface Prediction {
  id: string;
  asset: string;
  timeframe: string;
  content: string;
  createdAt: string;
  model: string;
}