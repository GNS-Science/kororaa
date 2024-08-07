describe("HazardMapsPage", () => {
  before(() => {
    // NB in cypress config we've set Pre 12 compatability
    // https://docs.cypress.io/guides/references/migration-guide#Simulating-Pre-Test-Isolation-Behavior
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit("/HazardMaps");
  });

  it("Map renders", () => {
    cy.get("button").contains("Accept").click({ force: true });
    cy.get('[id="leaflet-map-container"]').should("exist");
  });

  it("Map initially displays default map tile layer and changes map tile layer when user selects different option", () => {
    cy.get('img[src*="cartocdn"]');
    cy.get('[class="leaflet-control-layers-toggle"]').focus();
    cy.get('[type="radio"]').last().check({ force: true });
    cy.get('img[src*="arcgisonline"]');
  });

  it("Renders drawer, drawer close button closes drawer", () => {
    cy.get("h4").contains("Hazard Maps").should("exist");
    cy.get('[data-testid="ChevronLeftIcon"]').click({ force: true });
    cy.get("h4").contains("Hazard Maps").should("not.be.visible");
  });

  it("When fullscreen button is pressed, the map becomes full screen", () => {
    cy.get('a[title="Full Screen"]').click();
    cy.get('[id="leaflet-map-container"]').should("have.class", "leaflet-pseudo-fullscreen");
  });

  it("When fullscreen button is pressed and map is full screen, the map becomes smaller", () => {
    cy.get('a[title="Exit Full Screen"]').click({ force: true });
    cy.get('[id="leaflet-map-container"]').should("not.have.class", "leaflet-pseudo-fullscreen");
  });

  it("Map displays geojson data", () => {
    cy.get('[class="leaflet-interactive"]').should("have.length", 3478);
  });
});
