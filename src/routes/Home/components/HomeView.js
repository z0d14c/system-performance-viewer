import React from 'react'
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { timeseriesList } from '../../../constants/timeseriesConstants';

export const HomeView = ({ metrics, toggleMetric }) => {
  return (
    <FormGroup row>
      {timeseriesList.map((timeseriesObject) => (
        metrics && metrics[timeseriesObject.static_name] && <FormControlLabel
          key={timeseriesObject.static_name}
          control={
            <Checkbox
              checked={metrics[timeseriesObject.static_name].toggled}
              onChange={() => (toggleMetric(timeseriesObject.static_name))}
              value={`${timeseriesObject.static_name}_toggle`}
            />}
          label={timeseriesObject.name}        
        />
      ))}
    </FormGroup>
  )
}
export default HomeView
