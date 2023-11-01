describe('Hazard Curves', () => {
  before(() => {
    cy.visit('/HazardCurves');
  });

  it('Hits graphql with hazard curve query', () => {
    cy.get('button').contains('Accept').click();
  });

  it('Displays inital charts when first visiting page', () => {
    cy.get('[role="curve"]').should('have.length', 10);
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
    cy.contains('Uniform Hazard Spectra');
    cy.get('input[id="poe-input"]').clear().type('10.5');
    cy.get('[type="submit"]').click();
    cy.contains('Uniform Hazard Spectra');
    cy.get('input[id="poe-input"]').clear();
    cy.get('[type="submit"]').click();
    cy.get('Uniform Hazard Spectra').should('not.exist');
  });

  it('Displays multiple curves after user selects multiple spectral periods', () => {
    cy.get('div').contains('PGA').click();
    cy.get('li[data-value="SA(0.1)"]').click();
    cy.get('li[data-value="SA(0.2)"]').click();
    cy.get('li[data-value="SA(0.3)"]').click();
    cy.get('body').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[role="curve"]').should('have.length', 20);
  });

  it('Displays tooltips for all selected spectral periods', () => {
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'PGA');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.1)');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.2)');
    cy.get('div[class="visx-legend-label"]').should('contain.text', 'SA(0.3)');
  });

  it('Displays one curve after user deselects spectral periods', () => {
    cy.get('div').contains('Multiple selected').click({ force: true });
    cy.get('li[data-value="SA(0.1)"]').click();
    cy.get('li[data-value="SA(0.2)"]').click();
    cy.get('li[data-value="SA(0.3)"]').click();
    cy.get('body').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[role="curve"]').should('have.length', 5);
    cy.get('[role="listbox"]').focus().type('{esc}');
  });

  it('Displays multiple curves when user selects more than one location', () => {
    cy.get('[data-testid="ArrowDropDownIcon"]').first().click({ force: true });
    cy.get('li').contains('Christchurch').click({ force: true });
    cy.get('[type="submit"]').click({ force: true });
    cy.wait(1000);
    cy.get('div[class="visx-legend-label"]').should('contain.text', '400m/s PGA Christchurch 400m/s PGA Wellington');
  });

  it('Displays curve when user inputs arbitrary latlon value', () => {
    cy.get('[data-testid="ArrowDropDownIcon"]').first().click({ force: true });
    cy.get('li').contains('Christchurch').click({ force: true });
    cy.get('li').contains('Wellington').click({ force: true });
    cy.get('[class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd css-1x51dt5-MuiInputBase-input-MuiInput-input"]').first().type('-42, 173');
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[role="curve"]').should('have.length', 5);
    cy.get('div[class="visx-legend-label"]').should('contain.text', '400m/s PGA -42.0, 173.0');
  });

  it.skip('Displays multiple curves when user selects more than one VS30', () => {
    cy.get('div').contains('400').click();
    cy.get('li').contains('350').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[role="curve"]').should('have.length', 5);
    cy.realPress("{esc}");
  });

  it.skip('When the save data button is clicked, a CSV file is downloaded', () => {
    cy.get('button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-9z10d6-MuiButtonBase-root-MuiIconButton-root"]').click();
    cy.get('li').contains('get CSV').click();
    cy.readFile('./hazard-curves.csv');
  });
});
