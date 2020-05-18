/*global cy */

describe('Testing the form inputs', () => {
    it('Tests the name input', () => {
        cy
            .visit('http://localhost:3000/pizza')
            .get('[data-cy="name"]')
            .type('Kirsten')
            .should('have.value', 'Kirsten')
    })

    it('Tests that multiple toppings can be selected', () => {
        cy
            .get('[data-cy="cheese"]')
            .check()
            .should('be.checked')
            .get('[data-cy="olives"]')
            .check()
            .should('be.checked')
    })

    it('Tests that form can be submitted', () => {
        cy.get('form').submit()
    })
})