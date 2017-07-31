import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home, { HomeRoute } from './Home'
import CounterRoute from './Counter'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    HomeRoute(store)
  ]
})

export default createRoutes
