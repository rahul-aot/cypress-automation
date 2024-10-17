describe(' launch application ', () => {
    it('launch test application', () => {
        cy.visit('https://dev.quipohealth.com/')
        cy.get('.account-label-text').should('exist')
        cy.get('.form-signup-button').click()
        cy.url().should('eq', 'https://dev.quipohealth.com/patient/verify-email');
        cy.get('.forgot-password-container > :nth-child(2) > .form-input').type('Rahul')
        cy.get(':nth-child(3) > .form-input').type('AP')
        cy.get('#inputEmail').type('abc')
        cy.get('quipo-email-input > .form-validation-errors > strong').should('exist')
        cy.get('quipo-email-input > .form-validation-errors > strong').should('contain', 'Please enter a valid email.')
        cy.get('#inputEmail').type('abc@gmail.com')


        cy.get('#password').clear().type('123');
        cy.get('#confirmPassword').click();
        cy.get(':nth-child(2) > strong').should('exist');

        cy.get('#password').clear().type('123111111111');
        cy.get(':nth-child(2) > strong').should('exist');

        cy.get('#password').clear().type('rahul12345');
        cy.get(':nth-child(2) > strong').should('exist');

        cy.get('#password').clear().type('Rahul12345');
        cy.get(':nth-child(2) > strong').should('exist');

        cy.get('#password').clear().type('rahul@12345');
        cy.get(':nth-child(2) > strong').should('exist');

        cy.get('#password').clear().type('Rahul@12345');
        cy.get(':nth-child(2) > strong').should('not.exist');


        cy.get('#confirmPassword').type('Rahul@54321');
        cy.get('.remember-me > input').click();
        cy.get('strong').should('contain', 'Passwords does not match');
        cy.get('#confirmPassword').clear().type('Rahul@12345');
        cy.get('.remember-me > input').click();
        cy.get('strong').should('not.exist');
        cy.get('.remember-me > input').click();
        cy.get('.remember-me > input').then(($checkbox) => {
            if (!$checkbox.is(':checked')) {
              cy.get('.remember-me > input').check();
            }
          });

        


        // cy.get('#confirmPassword').clear().type('Rahul@12345');


        // cy.get('.remember-me > input').click();


//         cy.get('#password').type('Rahul@12345');
// cy.get('#confirmPassword').type('Rahul@12345');
// cy.get('.password-match-message').should('not.exist'); // assuming no error when they match






        // cy.get('#inputEmail').type('abc@gmail.com')
        // 

        
        
    })
})
