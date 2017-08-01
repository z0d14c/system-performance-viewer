import HomeView from './containers/HomeContainer'
import { injectReducer } from '../../store/reducers'

const Home = {
  component : HomeView
}
// Sync route definition
export default Home;

export const HomeRoute = (store) => ({
  path : '/',
  component: HomeView,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SystemMetrics = require('./containers/HomeContainer').default

      /*  Return getComponent   */
      cb(null, SystemMetrics)

    /* Webpack named bundle   */
    }, 'metrics')
  }
})
