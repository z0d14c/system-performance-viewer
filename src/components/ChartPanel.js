import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { MetricChart } from './Chart'
import { timeseriesList } from '../constants/timeseriesConstants'
class ChartPanel extends React.Component {

  render () {
    const { metrics } = this.props
    const metricCharts = Object.keys(metrics).map((metricKey) => {
        const metric = metrics[metricKey]
        if (!metric.toggled) {
            return null
        }
        const labelName = timeseriesList.find(item => item.static_name === metricKey).name
        return (<Grid item m={6} s={12}>
            <Paper elevation={4}>
                <Typography type="headline" component="h3">
                {labelName}
                </Typography>
                <MetricChart metric={metric} />
            </Paper>
        </Grid>)
    })
    return (<Grid container xs={12}>        
        {metricCharts}
    </Grid>)
  }
}

export default ChartPanel