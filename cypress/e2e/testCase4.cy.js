describe('Test Case 4 - List GitHub PRs', () => {
  it('should fetch PRs from GitHub and save to CSV', () => {
   

    cy.request({
      method: 'GET',
      url: 'https://api.github.com/repos/appwrite/appwrite/pulls',
      
    }).then((response) => {
      //Verificamos
      expect(response.status).to.eq(200);

      // Extraemos PRs y convertimos a formato CSV
      const prData = response.body.map(pr => ({
        name: pr.title,
        date: pr.created_at,
        author: pr.user.login
      }));

      const csvContent = 'PR Name,Created Date,Author\n' + 
        prData.map(pr => `${pr.name},${pr.date},${pr.author}`).join('\n');

      //Escribo el CSV con Cypress
      cy.writeFile('cypress/e2e/output/pr_list.csv', csvContent);

      //Confirmo que se ha guardado bien
      cy.log('CSV saved at: cypress/e2e/output/pr_list.csv');
    });
  });
});
