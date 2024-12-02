context('Shopping list', () => {
  beforeEach(() => {
    cy.session('logged in', () => {
      cy.visit('http://localhost:8000/')
      cy.wait(2000)
      cy.get('#username').type('michasbueno').should('have.value', 'michasbueno')
      cy.get('#password').type('Password123$').should('have.value', 'Password123$')
      cy.get('#kc-form-login').submit()
    })
  })

  it('add list', () => {
    cy.visit('http://localhost:8000/')
    cy.wait(2000)
    cy.get("button[class$='to-accent']").contains('Listy zakupów').click()
    cy.get("button[aria-expanded='false']").click()
    cy.get("input[data-testid='name-input']").type('Testowa lista')
    cy.get('form').submit()
    cy.get("button[class*='top-4']").click()
    cy.get('h3').should('contain.text', 'Testowa lista')
  })

  it('add product', () => {
    cy.visit('http://localhost:8000/')
    cy.wait(2000)
    cy.get("button[class$='to-accent']").contains('Listy zakupów').click()
    cy.wait(2000)
    cy.get('html > body > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div')
      .filter((index: any, element: any) => {
        const h3 = element.querySelector('div > h3')
        return h3 && h3.textContent.includes('Testowa lista')
      })
      .should('exist')
      .find('div > button')
      .eq(1)
      .click()
    cy.get('html > body > div > div:nth-of-type(1) > div > div:nth-of-type(1) > button').click()
    cy.get("input[data-testid='name-input']").type('Testowy produkt')
    cy.get("input[data-testid='quantity-input']").type('{backspace}1')
    cy.get("input[data-testid='quantity-type-input']").type('szt')
    cy.get("form[name='product-form']").submit()
    cy.get("button[class*='top-4']").click()
    cy.get('html > body > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div')
      .filter((index: any, element: any) => {
        const h3 = element.querySelector('div > h3')
        const p = element.querySelector('div > p')
        return (
          h3 && p && h3.textContent.includes('Testowy produkt') && p.textContent.includes('1 szt')
        )
      })
      .should('exist')
  })

  it('delete product', () => {
    cy.visit('http://localhost:8000/')
    cy.wait(2000)
    cy.get("button[class$='to-accent']").contains('Listy zakupów').click()
    cy.wait(2000)
    cy.get('button[data-testid="edit-button"]').click()
    cy.get('html > body > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div')
      .filter((index: any, element: any) => {
        const h3 = element.querySelector('div > h3')
        const p = element.querySelector('div > p')
        return (
          h3 && p && h3.textContent.includes('Testowy produkt') && p.textContent.includes('1 szt')
        )
      })
      .should('exist')
      .find('div > button')
      .eq(1)
      .click()
  })

  it('delete list', () => {
    cy.visit('http://localhost:8000/')
    cy.wait(2000)
    cy.get("button[class$='to-accent']").contains('Listy zakupów').click()
    cy.get('html > body > div > div:nth-of-type(1) > div > div:nth-of-type(2) > div')
      .filter((index: any, element: any) => {
        const h3 = element.querySelector('div > h3')
        return h3 && h3.textContent.includes('Testowa lista')
      })
      .should('exist')
      .find('div > button')
      .eq(0)
      .click()
  })
})
