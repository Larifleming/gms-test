///<reference type="cypress"/>

    describe('US-00 : Funcionalidade: Busca de filmes', () => {
    beforeEach (() => { 
    cy.visit ('/')
    });

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'Matrix')
    });

    it('Deve buscar filme com sucesso de uma lista', () => {
        cy.fixture('filmes').then((filmes) =>{
            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[0].titulo)   
    })

});

    it('Deve buscar filme com sucesso de uma lista inteira', () => {
    cy.fixture('filmes').each((filmes) => {
        cy.get('#search-input').clear().type(filmes.titulo)
        cy.get('#search-button').click({force: true})
        cy.get('#results-section').should('contain', filmes.titulo)   

        })

    });
});