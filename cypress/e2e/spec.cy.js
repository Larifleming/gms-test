///<reference type="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Larissa')
    cy.get('#signup-lastname').type('Fleming')
    cy.get('#signup-email').type('lariflem@teste.com')
    cy.get('#signup-phone').type('1122255211')
    cy.get('#signup-password').type('Teste@1010!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!' )
  })
})