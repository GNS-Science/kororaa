describe('Hazard Curves', () => {
  before(() => {
    cy.visit('/HazardCurves');
  });

  it('Hits graphql with hazard curve query', () => {
    cy.get('button').contains('Accept').click();
  });

  it('Displays chart', () => {
    cy.get('[aria-label="XYChart"]').should('exist');
  });

  it('Displays second chart after probability of exceedence selection', () => {
    cy.get('[id$="mui-component-select-Probability of Exceedance"]').click();
    cy.get('[data-value="2%"]').click();
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="XYChart"]').should('have.length', 2);
  });
});