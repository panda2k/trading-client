export type Candlestick = {
    /**
     * Opening price of candle
     */
    open: number

    /**
     * Closing price of candle
     */
    close: number

    /**
     * Highest price of candle
     */
    high: number

    /**
     * Lowest price of candle
     */
    low: number

    /**
     * Open time of candle
     */
    openTime: Date

    /**
     * Close time of candle
     */
    closeTime: Date

    /**
     * Volume of candle
     */
    volume: number
}


