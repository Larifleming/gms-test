///<reference type="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach (() => { 
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `larissa${Date.now()}@teste.com`
    cy.preencherCadastro('Larissa', 'Fleming', email, '12235554' , 'Teste@123!')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!' )
  })

  it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Larissa20', 'Fleming', 'lariflem@teste.com', '12235554' , 'Teste@123!') 
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  });

})