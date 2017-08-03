import React from 'react'
import { IndexLink, Link } from 'react-router'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import BuildIcon from 'material-ui-icons/Build'
import Typography from 'material-ui/Typography'
import './PageLayout.css'

export const PageLayout = ({ children }) => (
  <Grid container xs={12} gutter={24}>
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton aria-label="Menu">
          <BuildIcon />
        </IconButton >
        <Typography type="title" color="inherit">
           System Performance Viewer
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
  </Grid>
)

export default PageLayout
