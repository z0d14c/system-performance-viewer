import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import Grid from 'material-ui/Grid'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <Grid>', () => {
    const wrapper = shallow(<PageLayout />)
    const GridsFound = wrapper.find(Grid)
    expect(GridsFound.length).to.equal(1)
  })
})
