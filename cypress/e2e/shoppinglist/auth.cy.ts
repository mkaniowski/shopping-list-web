import { faker } from '@faker-js/faker'

context('Auth', () => {
  let credentials: {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
  }

  before(() => {
    credentials = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName().replace(/[^a-zA-Z0-9]/g, ''),
      email: faker.internet.email(),
      password: faker.internet.password(8, true, /[A-Z]/, '1$'),
    }
  })

  beforeEach(() => {
    cy.session('visit site', () => {
      cy.visit('http://localhost:8000/')
    })
  })

  it('register', () => {
    cy.visit('http://localhost:8000/register')
    cy.wait(2000)
    cy.get('#firstName').type(credentials.firstName).blur()
    cy.get('#lastName').type(credentials.lastName).blur()
    cy.get('#username').type(credentials.username).blur()
    cy.get('#email').type(credentials.email).blur()
    cy.get('#password').type(credentials.password).blur()
    cy.wait(2000)
    cy.get("button[type='submit']").click()
    cy.wait(5000)
  })

  it('login', () => {
    cy.visit('http://localhost:8000/')
    cy.wait(2000)
    cy.get('#username').type(credentials.username).should('have.value', credentials.username)
    cy.get('#password').type(credentials.password).should('have.value', credentials.password)
    cy.get('#kc-form-login').submit()
    cy.wait(2000)
    cy.title().should('eq', 'Vite + React + TS')
  })
})
