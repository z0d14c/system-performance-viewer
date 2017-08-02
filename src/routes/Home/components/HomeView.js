import React from 'react'
import Grid from 'material-ui/Grid'
import { FormGroup, FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ChartPanel from '../../../components/ChartPanel'
import { timeseriesList } from '../../../constants/timeseriesConstants';

const styleSheet = createStyleSheet(theme => ({
  paper: {
    height: 50,
    width: 150,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
}));


export class HomeView extends React.Component {
  render () {
    const { metrics, toggleMetric, classes } = this.props
    const timescale = '1week'
    // todo: place checkboxes in their own component
    return (
      <Grid container xs={12} justify="center" align="center" className={classes.control}>
        <Grid item xs={12} m={9}>
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
        </Grid>
        <Grid item xs={12} m={3}>
          <FormControl required>
            <FormLabel>Timescale</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              className={classes.group}
              selectedValue={timescale}
              onChange={() => null}
            >
              <FormControlLabel value="1day" control={<Radio />} label="1 Day" />
              <FormControlLabel value="1week" control={<Radio />} label="1 Week" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container xs={12} justify="center" align="center" className={classes.control}>
          <ChartPanel metrics={metrics} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styleSheet)(HomeView);
