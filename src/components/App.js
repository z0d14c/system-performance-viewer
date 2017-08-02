import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import createMuiTheme from 'material-ui/styles/theme'
import createPalette from 'material-ui/styles/palette'
import { blueGrey } from 'material-ui/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styles from '../styles/main.css'

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light',
  }),
});

// idea for theme that i didnt have time to implement
// #53B0CD light sky blue
// #E1DEE3 grey
// #F7EEF1 light greywhite
// #E19F65 sand
// #B0672B dark sand/sandstone

class App extends React.Component {
  
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider theme={theme}>
          <div className={styles['app-container']}>
            <Router history={browserHistory} children={this.props.routes} />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
