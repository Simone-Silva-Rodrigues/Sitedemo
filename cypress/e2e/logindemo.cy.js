describe('Login', () => {
  it('logando com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('contain','Products')


  });


  it('logando sem usuario', () => {
    cy.visit('https://www.saucedemo.com/')
    //cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username is required')
  //  cy.get('[data-test="title"]').should('contain','Products')
    cy.screenshot('tela de erro')


  });

  
  it('logando sem senha', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
   // cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Password is required')
  //  cy.get('[data-test="title"]').should('contain','Products')
    cy.screenshot('tela de erro senha')


});

it('preenchendo os campos e nao clicar no login', () => {
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  //cy.get('[data-test="login-button"]').click()
  cy.get('.login_logo').should('contain','Swag Labs')
  //cy.get('[data-test="error"]').should('contain','Epic sadface: Password is required')
//  cy.get('[data-test="title"]').should('contain','Products')
  cy.screenshot('tela permanece')

});


  it('logando com usurio invalido', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('simone rodrigues')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.login_logo').should('contain','Swag Labs')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
    //cy.get('[data-test="title"]').should('contain','Products')
    cy.screenshot('tela nome invalido')
  


});
});