describe('LeafletPage', () => {
  before(() => {
    cy.visit('/RuptureSets');
    cy.get('button').contains('Accept').click();
  });

  it('Map renders', () => {
    cy.get('[id="leaflet-map-container"]').should('exist');
  });

  it('Map displays geojson data', () => {
    cy.get('[class="leaflet-interactive"]').should('have.length', 241);
  });

  it('Map initially displays default map tile layer and changes map tile layer when user selects different option', () => {
    cy.get('img[src*="arcgisonline"]');
    cy.get('[class="leaflet-control-layers-toggle"]').focus();
    cy.get('[type="radio"]').last().check();
    cy.get('img[src*="google"]');
  });

  it('Renders drawer button and opens the drawer when clicked, drawer close button closes drawer', () => {
    cy.get('[data-testid="ChevronRightIcon"]').click();
    cy.get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-p1ulq7-MuiPaper-root-MuiDrawer-paper"]').should(
      'be.visible',
    );
    cy.get('[data-testid="ChevronLeftIcon"]').click();
    cy.get('[class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-p1ulq7-MuiPaper-root-MuiDrawer-paper"]').should(
      'not.be.visible',
    );
  });

  it('When fullscreen button is pressed, the map becomes full screen', () => {
    cy.get('a[title="Full Screen"]').click()
    cy.get('[id="leaflet-map-container"]').should('have.class', 'leaflet-pseudo-fullscreen')
  })

  it('When fullscreen button is pressed and map is full screen, the map becomes smaller', () => {
    cy.get('a[title="Exit Full Screen"]').click()
    cy.get('[id="leaflet-map-container"]').should('not.have.class', 'leaflet-pseudo-fullscreen')
  })
});
