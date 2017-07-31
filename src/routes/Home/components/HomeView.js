import React from 'react'
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import { timeseriesList } from '../../../constants/timeseriesConstants';

export const HomeView = (state) => {
  console.log('blep ', state);
  return (
    <FormGroup row>
      <FormControlLabel
      control={
         <Checkbox
          checked={true}
          onChange={() => (console.log('blep'))}
          value="checkedA"
        />
      }
      label="Option A"
      />
    </FormGroup>
  )
}
export default HomeView
