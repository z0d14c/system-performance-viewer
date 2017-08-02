import React from 'react'
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import { shallow } from 'enzyme'
import { HomeView } from 'routes/Home/components/HomeView'
import { initialState } from 'reducers/metricsReducer'
// import { timeseriesList } from 'constants/timeseriesConstants';

describe('(View) Home', () => {

  it('Should output a form group', () => {
    const wrapper = shallow(<HomeView metrics={initialState} classes={{}} />)
    const formGroups = wrapper.find(FormGroup)
    expect(formGroups.length).to.not.equal(0)
  })

  it('Should output a control for each metric', () => {
    const wrapper = shallow(<HomeView metrics={initialState} classes={{}} />)
    const formGroups = wrapper.find(FormControlLabel)
    expect(formGroups.length).to.equal(Object.keys(initialState).length)
  })
})
