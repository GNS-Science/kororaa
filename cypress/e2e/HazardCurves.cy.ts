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
    cy.get('input[id="poe-input"]').type('10');
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="XYChart"]').should('have.length', 2);
  });

  it('Displays multiple curves after user selects multiple spectral periods', () => {
    cy.get('div').contains('PGA').click()
    cy.get('li[data-value="SA(0.1)"]').click()
    cy.get('li[data-value="SA(0.2)"]').click()
    cy.get('li[data-value="SA(0.3)"]').click()
    cy.get('[type="submit"]').click({force: true});
    cy.get('path[class="visx-path"]').should('have.length', 6)
  })

  it('Displays tooltips for all selected spectral periods', () => {
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'PGA')
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.1)')
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.2)')
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.3)')
  })

  it.skip('When the save data button is clicked, a CSV file is downloaded', () => {
    cy.get('button').contains('Save Data').click()
    cy.readFile('hazard-curves.csv')
  })
});