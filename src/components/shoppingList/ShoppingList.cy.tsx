import { TestRouter } from '@/test/utils/TestRouter'
import ShoppingList from './ShoppingList'

describe('render <ShoppingList />', () => {
  it('renders', () => {
    cy.mount(
      <TestRouter>
        <ShoppingList />
      </TestRouter>,
    )
    cy.get('div').get('.shopping-list').should('be.visible')
  })
})
