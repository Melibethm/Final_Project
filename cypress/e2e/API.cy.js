
describe('API Tests', () => {
   
    let tokens=null;
    it('Log in', () => {
      cy.request({
          method: 'POST',
          url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
          body: {
            
                "email": "Noemail123@noemail.com",
                "password": "Password123"
            
          }
        }).then((response) => {
            tokens=response.body.token
            cy.log('Bearer Token:', tokens);

        })
    })
    
  it('Get contact list', () => {
   
    cy.request({
        method: 'GET',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
        headers: {
            Authorization: 'Bearer ' + tokens,
        }
      }).then((response) => {
        
        cy.log('API Response:', response);
         })
});


    it('Add contact', () => {
      
        cy.request({
          method: 'POST',
          url: 'https://thinking-tester-contact-list.herokuapp.com/contacts',
          headers: {
            Authorization: 'Bearer ' + tokens,
          },
          body:
          {
            "firstName": "John",
            "lastName": "Doe",
            "birthdate": "1970-01-01",
            "email": "jdoe@fake.com",
            "phone": "8005555555",
            "street1": "1 Main St.",
            "street2": "Apartment A",
            "city": "Anytown",
            "stateProvince": "KS",
            "postalCode": "12345",
            "country": "USA" 
            }
        }).then((response) => {
          
          cy.log('API Response:', response);
          
        });
      });

      it('PUT update contact', () => {
      
        cy.request({
          method: 'PUT',
          url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/6506505243a5630013f70875',
          headers: {
            Authorization: 'Bearer ' + tokens,
          },
          body: {
            
                "firstName": "Amy",
                "lastName": "Miller",
                "birthdate": "1992-02-02",
                "email": "amiller@fake.com",
                "phone": "8005554242",
                "street1": "13 School St.",
                "street2": "Apt. 5",
                "city": "Washington",
                "stateProvince": "QC",
                "postalCode": "A1A1A1",
                "country": "Canada"
            

          }

        }).then((response) => {
          
          cy.log('API Response:', response);
          
        });
      });
        
      it('PATCH update contact', () => {
      
        cy.request({
          method: 'PATCH',
          url: 'https://thinking-tester-contact-list.herokuapp.com/contacts/65076c6697e8a8001392b524',
          headers: {
            Authorization: 'Bearer ' + tokens,
          },
          body: {
            
                "firstName": "Amy",
            
            }

        }).then((response) => {
          
          cy.log('API Response:', response);
          
        });
      });

      it('Get user profile', () => {
        cy.request({
          method: 'GET',
          url: 'https://thinking-tester-contact-list.herokuapp.com/users/me',
          headers: {
            Authorization: 'Bearer ' + tokens,
          },
        }).then((response) => {
          
          cy.log('API Response:', response);
          
        });
      });


        it('log out', () => {
      
        cy.request({
          method: 'POST',
          url: 'https://thinking-tester-contact-list.herokuapp.com/users/logout',
          headers: {
            Authorization: 'Bearer ' + tokens,
          },
        }).then((response) => {
          
          cy.log('API Response:', response);
          
        });
      });

      
  });
  