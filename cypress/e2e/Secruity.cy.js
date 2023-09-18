describe ('User Registration', () => {
    it ('should register new user', () => { 
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#signup').click();
    cy.get ('#firstName').type('Jhon').should('have.value', 'Jhon')
    cy.get ('#lastName').type('Down').should('have.value', 'Down')
    cy.get ('#email').type('Noemail1@noemail.com').should('have.value', 'Noemail1@noemail.com')
    cy.get ('#password').type ('12345678').should('have.value', '12345678')
    cy.get ('#submit').click();
    cy.get ('.main-content')
  })
})