describe('Home Page', () => {
  it('should render the home page with the correct content', () => {
    cy.visit('http://localhost:3000');

    cy.get('.head_text').should('exist').and('have.text', 'Discover & shareUseful AI prompts');

    cy.get('.desc').should('exist').and('include.text', 'My prompts is an opensource AI propmpting tool');

    cy.get('.feed').should('exist');
  });
});
