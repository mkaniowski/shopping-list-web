import { TestRouter } from '@/test/utils/TestRouter'
import ShoppingListCard from './ShoppingListCard'

describe('render <ShoppingList />', () => {
  it('renders', () => {
    cy.mount(
      <TestRouter>
        <ShoppingListCard />
      </TestRouter>,
    )
    cy.get('div').get('.shopping-list-card').should('be.visible')
  })
})
