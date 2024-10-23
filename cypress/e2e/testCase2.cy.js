describe('Test Case 2 - Validate page status codes', () => {
    it('should return 200 or 30x status for all links', () => {
      cy.visit('/');
      cy.get('a').each((link) => {
        const href = link.prop('href');
        if (href) {
          cy.request(href).its('status').should('be.oneOf', [200, 301, 302]);
        }
      });
    });
  });
  