import React from 'react'
import Navbar from './Navbar'
import { TestRouter } from '@/test/utils/TestRouter'
import { BASE_URL } from '@/config'

describe('render <Navbar />', () => {
  it('renders', () => {
    cy.mount(
      <TestRouter>
        <Navbar />
      </TestRouter>,
    )
    cy.get('nav').should('be.visible')
    cy.get('nav').children().should('have.length', 2)
    // cy.get('nav').children().get('img').should('be.visible')
    cy.get('nav').children().get('span').should('be.visible')
    cy.get('nav').children().get('span').children().should('be.visible')
    cy.get('nav').children().get('span').children().should('have.length', 3)
  })
})

describe('click home button <Navbar />', () => {
  it('renders', () => {
    cy.mount(
      <TestRouter>
        <Navbar />
      </TestRouter>,
    )
    cy.get('button').contains('navbar.home').click()
    cy.location('href').should('eq', `${BASE_URL}/`)
  })
})

describe('click lists button <Navbar />', () => {
  it('renders', () => {
    cy.mount(
      <TestRouter>
        <Navbar />
      </TestRouter>,
    )
    cy.get('button').contains('navbar.lists').click()
    cy.location('href').should('eq', `${BASE_URL}/shopping-list`)
  })
})

describe('click logout button <Navbar />', () => {
  it('renders', () => {
    cy.mount(
      <TestRouter>
        <Navbar />
      </TestRouter>,
    )
    cy.location('href').should('eq', `https://localhost:8090/login`)
  })
})
