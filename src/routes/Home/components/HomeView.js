import React from 'react'
import Grid from 'material-ui/Grid'
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { timeseriesList } from '../../../constants/timeseriesConstants';

const styleSheet = createStyleSheet(theme => ({
  paper: {
    height: 50,
    width: 200,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
}));


export class HomeView extends React.Component {
  render () {
    const { metrics, toggleMetric, classes } = this.props
    // todo: place checkboxes in their own component
    return (
      <Grid container xs={12} justify="center" align="center" className={classes.control}>
        <FormGroup row>
          <Grid container xs={12}>
            {timeseriesList.map((timeseriesObject) => (
              metrics && metrics[timeseriesObject.static_name] && <Grid item xs={6}><Paper className={classes.paper}><FormControlLabel
                key={timeseriesObject.static_name}
                control={
                  <Checkbox
                    checked={metrics[timeseriesObject.static_name].toggled}
                    onChange={() => (toggleMetric(timeseriesObject.static_name))}
                    value={`${timeseriesObject.static_name}_toggle`}
                  />}
                label={timeseriesObject.name}        
              /></Paper></Grid>
            ))}
          </Grid>
        </FormGroup>
      </Grid>
    )
  }
}

export default withStyles(styleSheet)(HomeView);
