describe('Test Case 3 - Verify login', () => {
    it('should login successfully with valid credentials', () => {
      cy.visit(Cypress.env('loginUrl'));
      cy.get('input[name="username"]').type('demouser');
      cy.get('input[name="password"]').type('fashion123');
      cy.get('#loginForm input[type=submit]').click();
      cy.url().should('not.include', 'login');
    });
  });
  