import { connect } from 'react-redux'

import HomeView from '../components/HomeView'

// todo: move these to module
const mapDispatchToProps = {
    toggleMetric: () => null,
}

const mapStateToProps = (state) => ({
  metrics: state.metrics,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
