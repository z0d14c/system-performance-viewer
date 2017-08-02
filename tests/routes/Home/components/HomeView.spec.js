import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { shallow } from 'enzyme'
import { HomeView } from 'routes/Home/components/HomeView'
import { initialState } from 'reducers/metricsReducer'

describe('(View) Home', () => {

  it('Should output grid(s)', () => {
    const wrapper = shallow(<HomeView metrics={initialState} classes={{}} />)
    const grids = wrapper.find(Grid)
    expect(grids.length).to.not.equal(0)
  })

  it('Should output a Paper for each metric', () => {
    const wrapper = shallow(<HomeView metrics={initialState} classes={{}} />)
    const papers = wrapper.find(Paper)
    expect(papers.length).to.equal(4)
  })
})
