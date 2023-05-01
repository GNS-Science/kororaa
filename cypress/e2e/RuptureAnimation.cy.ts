describe('RuptureAnimationPage', () => {
  before(() => {
    cy.visit('/RuptureAnimation');
  });

  it('Map renders', () => {
    cy.get('button').contains('Accept').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should('exist');
  });

  it('Renders drawer button and opens the drawer when clicked, drawer close button closes drawer', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('h4').contains('IFM Rupture Animation').should('exist');
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('h4').contains('IFM Rupture Animation').should('not.be.visible');
  });

  it('Renders no geojson initially', () => {
    cy.get('[class="leaflet-interactive"]').should('not.exist');
  });

  it('Displays geojson when selected', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[class="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input"]').first().click({ force: true });
    cy.get('[data-value="Puysegur"]').click();
    cy.get('[aria-labelledby="mui-component-select-Locations"]').click({ force: true });
    cy.get('[data-value="Queenstown"]').click({ force: true});
    cy.realPress("{esc}");
    cy.get('[id="mui-component-select-Radius"]').click({ force: true});
    cy.get('[data-value="100km"]').click({ force: true});
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
  });

  it('Displays different geojson when moving through the animation', () => {
    cy.get('p').contains('Rupture 1 of 32').should('exist');
    cy.wait(2000);
    cy.get('[class="leaflet-control-timecontrol timecontrol-forward"]').click({ force: true });
    cy.get('p').contains('Rupture 2 of 32').should('exist');

  });

  it('Resets when geojson changes', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[aria-labelledby="report-hash-label mui-component-select-Sort By 1"]').click({ force: true });
    cy.get('[data-value="Magnitude"]').click({ force: true });
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('p').contains('Rupture 1 of 267').should('exist');
  })
});
