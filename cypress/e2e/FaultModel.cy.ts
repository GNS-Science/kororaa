describe('Fault Model all locations', () => {
  before(() => {
    cy.visit('/Resources/IFMAnalysis');
    cy.get('button').contains('Accept').click();
  });
  it('loads empty map', () => {
    cy.get('div[class="leaflet-pane leaflet-map-pane"]').should('exist');
  });
  it('Renders drawer button and opens the drawer when clicked, drawer close button closes drawer', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('h4').contains('Inversion Fault Model').should('exist');
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('h4').contains('Inversion Fault Model').should('not.be.visible');
  });
  it('Renders no geojson initially', () => {
    cy.get('[class="leaflet-interactive"]').should('not.exist');
  });
  it('Renders geojson for all locations when just a solution is selected', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Deformation Model"]').click();
    cy.get('[data-value="geodetic"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Time Dependence"]').click();
    cy.get('[data-value="Time Dependent"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Gutenberg-Richter b value"]').click();
    cy.get('[data-value="0.823"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Moment Rate Scaling"]').click();
    cy.get('[data-value="0.66"]').click();
    cy.get('button').contains('Submit').click();
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 2099);
  });

  it('Displays table with correct data', () => {
    cy.get('button').contains('Show').click({ force: true });
    cy.get('[class="MuiTablePagination-displayedRows css-levciy-MuiTablePagination-displayedRows"]').should('contain', '1–100 of 2099');
  });
});

describe('Fault Model wellington', () => {
  before(() => {
    cy.visit('/Resources/IFMAnalysis');
    cy.get('button').contains('Accept').click();
  });
  it('loads empty map', () => {
    cy.get('div[class="leaflet-pane leaflet-map-pane"]').should('exist');
  });

  it('Renders geojson for just a location when the location is selected', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Deformation Model"]').click();
    cy.get('[data-value="geodetic"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Time Dependence"]').click();
    cy.get('[data-value="Time Dependent"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Gutenberg-Richter b value"]').click();
    cy.get('[data-value="0.823"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Moment Rate Scaling"]').click();
    cy.get('[data-value="0.66"]').click();
    cy.get('[aria-labelledby="mui-component-select-Locations"]').click();
    cy.get('[data-value="Wellington"]').click();
    cy.get('body').click({ force: true });
    cy.get('[id="mui-component-select-Radius"]').click({ force: true});
    cy.get('[data-value="100km"]').click();
    cy.get('button').contains('Submit').click({ force: true });
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('path[stroke="red"]').should('have.length', 875);
  });
  it('Displays table with correct data', () => {
    cy.get('button').contains('Show').click({ force: true });
    cy.get('[class="MuiTablePagination-displayedRows css-levciy-MuiTablePagination-displayedRows"]').should('contain', '1–100 of 875');
  });
});
