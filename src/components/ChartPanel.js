import React from 'react'
import Grid from 'material-ui/Grid'
import { MetricChart } from './Chart'
class ChartPanel extends React.Component {

  render () {
    const { metrics } = this.props;
    const metricCharts = Object.keys(metrics).map((metricKey) => (
        <MetricChart metric={metrics[metricKey]} />
    ))
    return (<Grid container>
        {metricCharts}
    </Grid>)
  }
}

export default ChartPanel