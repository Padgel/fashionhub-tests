describe('Test Case 1 - Validate console errors', () => {
    it('should not have console errors on the about page', () => {
      cy.visit('/about.html');
      cy.on('window:console', (msg) => {
        expect(msg.type).not.to.equal('error');
      });
    });
  });
  