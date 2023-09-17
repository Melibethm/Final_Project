
describe ('Requests', () => {
    it ('should allow request', () => { 
    cy.request ('GET', 'https://thinking-tester-contact-list.herokuapp.com')
    .its('status')
    .should ('equal', 200)
  })

  
})