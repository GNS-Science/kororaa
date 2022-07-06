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

  it('Displays out of range error when POE over 100 or below 0 is selected', () => {
    cy.get('input[id="poe-input"]').type('1000');
    cy.get('[type="submit"]').click();
    cy.get('p').contains('Out of range 0-100');
    cy.get('input[id="poe-input"]').clear().type('-1');
    cy.get('[type="submit"]').click();
    cy.get('p').contains('Out of range 0-100');
    cy.get('input[id="poe-input"]').clear().type('eleven');
    cy.get('[type="submit"]').click();
    cy.get('p').contains('Not a number');
  });

  it('Displays second chart after probability of exceedence selection, then can deselect and chart disappears', () => {
    cy.get('input[id="poe-input"]').clear().type('10');
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="XYChart"]').should('have.length', 2);
    cy.get('input[id="poe-input"]').clear().type('10.5');
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="XYChart"]').should('have.length', 2);
    cy.get('input[id="poe-input"]').clear();
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="XYChart"]').should('have.length', 1);
  });

  it('Displays multiple curves after user selects multiple spectral periods', () => {
    cy.get('div').contains('PGA').click();
    cy.get('li[data-value="SA(0.1)"]').click();
    cy.get('li[data-value="SA(0.2)"]').click();
    cy.get('li[data-value="SA(0.3)"]').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('path[class="visx-path"]').should('have.length', 4);
  });

  it('Displays tooltips for all selected spectral periods', () => {
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'PGA');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.1)');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.2)');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.3)');
  });

  it('Displays one curve after user deselects spectral periods', () => {
    cy.get('div').contains('Multiple selected').click();
    cy.get('li[data-value="SA(0.1)"]').click();
    cy.get('li[data-value="SA(0.2)"]').click();
    cy.get('li[data-value="SA(0.3)"]').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('path[class="visx-path"]').should('have.length', 1);
  });

  it('Displays multiple curves when user selects more than one location', () => {
    cy.get('div[class="MuiAutocomplete-endAdornment css-1q60rmi-MuiAutocomplete-endAdornment"]').click();
    cy.get('li').contains('Christchurch').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('path[class="visx-path"]').should('have.length', 2);
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'WLG');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'CHC');
  });

  it('Displays multiple curves when user selects more than one VS30', () => {
    cy.get('div').contains('250').click();
    cy.get('li').contains('350').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('path[class="visx-path"]').should('have.length', 4);
  });

  it.skip('When the save data button is clicked, a CSV file is downloaded', () => {
    cy.get('button').contains('Save Data').click();
    cy.readFile('hazard-curves.csv');
  });
});
