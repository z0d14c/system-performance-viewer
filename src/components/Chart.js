import React from 'react'
import moment from 'moment'
const LineChart = require('react-d3-basic').LineChart

// if we have a day timescale, we only use the last 24 hours of data
export const timescaleExtraction = (timescale, metricArray) => {
    if (timescale === 'day') {
        return metricArray.slice(metricArray.length - 24)
    }
    return metricArray
}

// make the d3 graph responsive
export const responsiveDimensions = () => {
    let width = 600
    let height = 500
    if (window.innerWidth < 600) {
        width = 350
        height = 250
    }
    return {
        width,
        height
    }
}

// linechart, number of datapoints dependent on timescale
export const MetricChart = (props) => {
    const { metric, timescale } = props
    if (!metric.data.data) {
        return null
    }
    const metricData = timescaleExtraction(timescale, metric.data.data)
    // metricData.length - index = num hours ago
    const mappedMetric = metricData.map((item, index) => ({
        value: item,
        date: moment().subtract(metricData.length - index, 'hours')
    }))
    const { width, height } = responsiveDimensions()
    const margins = {left: 50, right: 50, top: 25, bottom: 25}
    const chartSeries = [{
        field: "value",
        name: metric.data.unit,
        color: '#ff7f0e',
    }]
    const x = (arg) => (arg.date)
    return (<LineChart 
        margins={margins} 
        width={width} 
        height={height} 
        data={mappedMetric} 
        chartSeries={chartSeries} 
        x={x}
        xScale={"time"}
    />)
}
