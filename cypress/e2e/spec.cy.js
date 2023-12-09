describe('pruebas heroku app', () => {
  it('login con usuario y contraseña validos', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.radius').click()
    cy.get('#flash').contains("You logged into a secure area!")
  })

    it('login con usuario invalido y contraseña validos', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(21) > a').click()
      cy.get('#username').type("Tomsmith456")
      cy.get('#password').type("SuperSecretPassword!")
      cy.get('.radius').click()
      cy.get('#flash').contains("Your username is invalid!")
    })


    it('login con usuario valido y contraseña invalidos', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(21) > a').click()
      cy.get('#username').type("tomsmith")
      cy.get('#password').type("Super866")
      cy.get('.radius').click()
      cy.get('#flash').contains("Your password is invalid!")
    })
  
  
    it('login con usuario invalido y contraseña validos', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(21) > a').click()
      cy.get('#username').type("Tomsmith456")
      cy.get('#password').type("Super866")
      cy.get('.radius').click()
      cy.get('#flash').contains("Your username is invalid!")
    })   
 
})