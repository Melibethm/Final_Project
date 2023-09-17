describe('Viewport test', ()=> {
    it ('should test standard mobile viewport', ()=> {
        cy.viewport (375, 667) //standard mobile viewport size
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
        cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
        cy.get ("#password").type("Password123").should('have.value', 'Password123')
        cy.get('#submit').click()
        cy.get ('.main-content')

    })
    it ('Should test tablet vertical viewport', () => {
        cy.viewport (768, 1024) // standard tablet viewport size
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
        cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
        cy.get ("#password").type("Password123").should('have.value', 'Password123')
        cy.get('#submit').click()
        cy.get ('#logout').click()
    })
    it ('should test tablet horizontal viewport', () => {
        cy.viewport (1024, 768) //standard tablet viewport size
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
        cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
        cy.get ("#password").type("Password123").should('have.value', 'Password123')
        cy.get('#submit').click()
        cy.get ('.main-content')
    })
    it ('should test desktop viewport', () => {
        cy.viewport (1920, 1080) //standard desktop viewport size
        cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
        cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
        cy.get ("#password").type("Password123").should('have.value', 'Password123')
        cy.get('#submit').click()
        cy.get ('#logout').click()
    })



})
    