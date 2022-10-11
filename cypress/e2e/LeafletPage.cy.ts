describe('HazardMapsPage', () => {
  before(() => {
    cy.visit('/HazardMaps');
  });

  it('Map renders', () => {
    cy.get('button').contains('Accept').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should('exist');
  });

  it('Map initially displays default map tile layer and changes map tile layer when user selects different option', () => {
    cy.get('img[src*="arcgisonline"]');
    cy.get('[class="leaflet-control-layers-toggle"]').focus();
    cy.get('[type="radio"]').last().check();
    cy.get('img[src*="google"]');
  });

  it('Renders drawer button and opens the drawer when clicked, drawer close button closes drawer', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('h4').contains('Hazard Maps').scrollIntoView()
    cy.get('h4').contains('Hazard Maps').should('be.visible');
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get('h4').contains('Hazard Maps').should('not.be.visible');
  });

  it('When fullscreen button is pressed, the map becomes full screen', () => {
    cy.get('a[title="Full Screen"]').click();
    cy.get('[id="leaflet-map-container"]').should('have.class', 'leaflet-pseudo-fullscreen');
  });

  it('When fullscreen button is pressed and map is full screen, the map becomes smaller', () => {
    cy.get('a[title="Exit Full Screen"]').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should('not.have.class', 'leaflet-pseudo-fullscreen');
  });

  it('Map displays geojson data', () => {
    cy.get('[class="leaflet-interactive"]').should('have.length', 3478);
  });
});
