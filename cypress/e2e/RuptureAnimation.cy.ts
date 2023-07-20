describe('ComboRuptureMapPage', () => {
  before(() => {
    cy.visit('/RuptureMap');
  });

  it('Map renders', () => {
    cy.get('button').contains('Accept').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should('exist');
  });

  it('Renders drawer button and opens the drawer when clicked, drawer close button closes drawer', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click({ force: true });
    cy.get('h4').contains('Rupture Explorer').should('exist');
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('h4').contains('Rupture Explorer').should('not.be.visible');
  });

  it('Renders no geojson initially', () => {
    cy.get('[class="leaflet-interactive"]').should('not.exist');
  });

  it('Displays geojson for whole map when no locations selected', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length.greaterThan', 4533);
  });

  it('Displays geojson for selected location', () => {
    cy.get('[aria-labelledby="mui-component-select-Locations"]').click({ force: true });
    cy.get('[data-value="Greymouth"]').click({ force: true });
    cy.realPress('{esc}');
    cy.get('[id="mui-component-select-Radius"]').click({ force: true});
    cy.get('[data-value="100km"]').click({ force: true});
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length.greaterThan', 4533);
  });

  it('Displays geojson for two selected locations', () => {
    cy.get('[aria-labelledby="mui-component-select-Locations"]').click({ force: true });
    cy.get('[data-value="Christchurch"]').click({ force: true });
    cy.realPress('{esc}');
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 1678);
  })

  it('Displays only location geojson if no ruptures are returned', () => {
    cy.get('[class="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input"]').first().click({ force: true });
    cy.get('[data-value="Hikurangi"]').click({ force: true });
    cy.get('[type="submit"]').click({ force: true });
    cy.get('[class="leaflet-interactive"]').should('have.length', 779);
  });

  it('Reloads page', () => {
    cy.reload();
  })

  it('Map renders', () => {
    cy.get('button').contains('Accept').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should('exist');
  });

  it('Displays geojson when selected', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click({ force: true });
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
    cy.wait(2000);
    cy.get('p').contains('Rupture 1 of 27').should('exist');
    cy.get('[class="leaflet-control-timecontrol timecontrol-forward"]').click({ force: true });
    cy.get('p').contains('Rupture 2 of 27').should('exist');

  });
});
