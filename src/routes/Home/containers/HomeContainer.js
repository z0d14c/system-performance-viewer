import { connect } from 'react-redux'

import HomeView from '../components/HomeView'
import { toggleMetric, toggleTimescale } from '../../../reducers/metricsReducer'

const mapDispatchToProps = {
    toggleMetric,
    toggleTimescale,
}

const mapStateToProps = (state) => ({
  metrics: state.metrics,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
