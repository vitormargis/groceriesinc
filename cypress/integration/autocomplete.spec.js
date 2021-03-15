describe('Nav Menus', () => {
  // For desktop view
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
    })
    describe('When you visit home', () => {
      it('Should visit home page', () => {
          cy.visit('/')
      });
      describe('When you search', () => {
        it('Should show suggestions', () => {
            cy.get('[data-cy=autocomplete-input]').type('B', { delay: 500 })
            cy.get('[data-cy=autocomplete-suggestions').should('exist')
        })
        it('Should show pre input matched suggestion', () => {
            cy.get('[data-cy=autocomplete-input]').type('e', { delay: 500 })
            cy.get('[data-cy=autocomplete-pre-input]').should('have.value', 'Bell pepper')
        })
        it('Should show pre input unmatched suggestion', () => {
            cy.get('[data-cy=autocomplete-input]').type('rry', { delay: 500 })
            cy.get('[data-cy=autocomplete-pre-input]').should('contain', 'Bilberry')
        })
      })
      describe('When selecting suggestion', () => {
        it('Should show pre input unmatched suggestion', () => {
            cy.get('[data-cy=autocomplete-suggestion-0]').click()
            cy.get('[data-cy=autocomplete-input]').should('have.value', 'Bilberry')
        })
      })
    })
  })
})