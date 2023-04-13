describe('Main Page', () => {
  beforeEach(() => {
    // intercept failed, so removed it. Not ideal. 
    cy.visit("http://127.0.0.1:5173/")
  });
  it('Should have a title and a list of articles on the landing page', () => {
    cy.get("h1").contains("Blanche's Times").should("be.visible");
    cy.get(':nth-child(1) > .list-link > .card-container').should("have.length", 1)
    cy.get(':nth-child(1) > .list-link > .card-container > .title').should("be.visible");
    cy.get(':nth-child(1) > .list-link > .card-container > p').should("be.visible");
  });
});