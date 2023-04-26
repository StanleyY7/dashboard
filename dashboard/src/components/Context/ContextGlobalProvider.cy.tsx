import React from 'react'
import { GlobalProvider } from './Context'

describe('<GlobalProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GlobalProvider />)
  })
})