import { connect } from 'react-redux'

import HomeView from '../components/HomeView'
import { toggleMetric } from '../../../reducers/metricsReducer'

// todo: move these to module
const mapDispatchToProps = {
    toggleMetric,
}

const mapStateToProps = (state) => ({
  metrics: state.metrics,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
