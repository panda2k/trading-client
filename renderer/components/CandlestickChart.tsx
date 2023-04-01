import {
    axisBottom,
    axisLeft,
    map,
    max,
    min,
    range,
    scaleBand,
    scaleLinear,
    scaleUtc,
    utcDays,
    utcFormat
} from "d3";
import { Candlestick } from "../types/candlestick";

/**
 * Creates a candle stick chart
 * 
 * @param {Candlestick[]} data the candle stick data to use
 * @param {Number} [xPadding=0.2] the padding in between candles 
 * @param marginTop the top margin in pixels 
 * @param marginRight  
 */
export default (data: Candlestick[], {
    xPadding = 0.2,
    marginTop = 20,
    marginRight = 30,
    marginBottom = 30,
    marginLeft = 40,
    xFormat = "%b %-d",
    yFormat = "~f",
}) => {
    const xOpen = map(data, d => d.openTime);
    const xClose = map(data, d => d.closeTime);
    const yOpen = map(data, d => d.open);
    const yClose = map(data, d => d.close);
    const yHigh = map(data, d => d.high);
    const yLow = map(data, d => d.low);
    const I = range(xOpen.length);

    /*const xDomain = utcDays(min(xOpen), max(xClose));
    const yDomain = [min(yLow), max(yHigh)];

    const xScale = scaleBand(xDomain, xRange).padding(xPadding);
    const yScale = scaleLinear(yDomain, yRange);
    const xAxis = axisBottom(xScale)
        .tickFormat(utcFormat(xFormat))
        .tickValues(xTicks);
    const yAxis = axisLeft(yScale).ticks(height / 40, yFormat);
    */
};


