describe ('User Registration', () => {
    it ('should register new user', () => { 
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#signup').click();
    cy.get ('#firstName').type('Jhon').should('have.value', 'Jhon')
    cy.get ('#lastName').type('Down').should('have.value', 'Down')
    cy.get ('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ('#password').type ('Password123').should('have.value', 'Password123')
    cy.get ('#submit').click();
    cy.get ('.main-content')
  })
})


describe('Login Test', () => {
  it ('should sign in succesfully', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ("#password").type("Password123").should('have.value', 'Password123')
    cy.get('#submit').click()
    cy.get ('.main-content')
  })
})


describe('Contact Creation', () => {
  it ('should create new contact', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ("#password").type("Password123").should('have.value', 'Password123')
    cy.get('#submit').click()
    cy.get ('.main-content')
    cy.get ('#add-contact').click()
    cy.get ('.main-content')
    cy.get ('#firstName').type ('Cindy').should('have.value', 'Cindy')
    cy.get ('#lastName').type ('Clark').should('have.value', 'Clark')
    cy.get ('#birthdate').type ('1999-02-01')
    cy.get ('#phone').type ('4015550303').should('have.value', '4015550303')
    cy.get ('#street1').type ('123 Street Name').should('have.value', '123 Street Name')
    cy.get ('#city').type ('Orlando')
    cy.get ('#stateProvince').type ('FL' ).should('have.value', 'FL')
    cy.get ('#postalCode').type('00001').should('have.value', '00001')
    cy.get ('#country').type('USA').should('have.value', 'USA')
    cy.get ('#submit').click()
    cy.get ('.main-content')
  })
})

describe('Contact Editing', () => {
  it ('should edit contact name', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ("#password").type("Password123").should('have.value', 'Password123')
    cy.get('#submit').click()
    cy.get ('.main-content')
    cy.get (':nth-child(3) > :nth-child(2)').click()
    cy.get ('#edit-contact').click()
    cy.get ('#firstName').should('have.value', 'Cindy')
    //this fails sometimes i'm not sure why.
      .clear().type('Sydney').should('have.value', 'Sydney')
    cy.get ('#submit')

  })
})

describe('Contact Deletion', () => {
  it ('should delete contact', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ("#password").type("Password123").should('have.value', 'Password123')
    cy.get('#submit').click()
    cy.get ('.main-content')
    cy.get (':nth-child(22) > :nth-child(2)').click()
    cy.get ('#delete').click()
    //cypress automatically closes the popup with ok

  })
})

describe('Contact information', () => {
  it ('should display contact information', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ("#password").type("Password123").should('have.value', 'Password123')
    cy.get('#submit').click()
    cy.get ('.main-content')
    cy.get (':nth-child(3) > :nth-child(2)').click()
  })
})

describe('Log out', () => {
  it ('should log out successfully', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Noemail123@noemail.com').should('have.value', 'Noemail123@noemail.com')
    cy.get ("#password").type("Password123").should('have.value', 'Password123')
    cy.get('#submit').click()
    cy.get ('#logout').click()

  })
})

describe('Error Handling', () => {
  it.only ('should display error message', () => {
    cy.visit ('https://thinking-tester-contact-list.herokuapp.com')
    cy.get('#email').type('Happyemail@noemail.com').should('have.value', 'Happyemail@noemail.com')
    cy.get ("#password").type("Password000").should('have.value', 'Password000')
    cy.get('#submit').click()
    cy.get('#error').should('have.value', '' )
  })
})
