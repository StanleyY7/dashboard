import React from 'react'
import MyChart from './Chart'

describe('<MyChart />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyChart />)
  })
})