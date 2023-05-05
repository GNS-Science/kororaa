describe('MultiRuptureMapPage', () => {
  before(() => {
    cy.visit('/MultiRuptureMap');
  });

  it('Map renders', () => {
    cy.get('button').contains('Accept').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should('exist');
  });

  it('Renders drawer button and opens the drawer when clicked, drawer close button closes drawer', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('h4').contains('Multi-Rupture Map').should('exist');
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('h4').contains('Multi-Rupture Map').should('not.be.visible');
  });

  it('Renders no geojson initially', () => {
    cy.get('[class="leaflet-interactive"]').should('not.exist');
  });

  it('Displays geojson for whole map when no locations selected', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 2267);
  });

  it('Displays geojson for selected location', () => {
    cy.get('[aria-labelledby="mui-component-select-Locations"]').click({ force: true });
    cy.get('[data-value="Greymouth"]').click({ force: true });
    cy.realPress('{esc}');
    cy.get('[id="mui-component-select-Radius"]').click({ force: true});
    cy.get('[data-value="100km"]').click({ force: true});
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 2267);
  });

  it('Displays geojson for two selected locations', () => {
    cy.get('[aria-labelledby="mui-component-select-Locations"]').click({ force: true });
    cy.get('[data-value="Christchurch"]').click({ force: true });
    cy.realPress('{esc}');
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 812);
  })

  it('Displays only location geojson if no ruptures are returned', () => {
    cy.get('[class="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input"]').first().click({ force: true });
    cy.get('[data-value="Hikurangi"]').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 2);
    cy.get('div').contains('No fault sections satisfy the filter.').should('exist');
  });
});
