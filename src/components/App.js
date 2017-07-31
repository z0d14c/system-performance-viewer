import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from '../styles/main.css';

class App extends React.Component {
  
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          <div className={styles['app-container']}>
            <Router history={browserHistory} children={this.props.routes} />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
