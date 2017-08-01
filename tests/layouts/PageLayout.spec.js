import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import Grid from 'material-ui/Grid'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<PageLayout />)
    const GridsFound = wrapper.find(Grid)
    expect(GridsFound.length).to.equal(1)
  })

  /*it('renders its children inside of the grid', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
    .find(Grid)
    .should.contain(<Child />)
  })*/
})
