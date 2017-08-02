// const Chart = require('react-d3-core').Chart
import React from 'react'
const LineChart = require('react-d3-basic').LineChart

export const MetricChart = (props) => {
    const { metric, timescale } = props
    if (!metric.data.data) {
        return null
    }
    const mappedMetric = metric.data.data.map((item, index) => ({
        value: item,
        index,
    }))
    const width = 400
    const height = 300
    const margins = {left: 50, right: 50, top: 25, bottom: 25}
    const chartSeries = [{
        field: 'value',
        name: metric.data.data.unit,
        color: '#ff7f0e',
    }]
    const x = (arg) => (arg.index)
    return (<LineChart 
        margins={margins} 
        width={width} 
        height={height} 
        data={mappedMetric} 
        chartSeries={chartSeries} 
        x={x} 
    />)
}
