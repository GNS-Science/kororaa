describe('Home Page', () => {
  it('Visits the Home Page', () => {
    cy.visit('/');
  });

  it('Displays the legal popup', () => {
    cy.contains('Disclaimer');
  });

  it('Accepts the legal popup', () => {
    cy.get('button').contains('Accept').click();
    cy.saveLocalStorage();
  });

  it('stores to local storage', async () => {
    cy.restoreLocalStorage();
    cy.getLocalStorage('disclaimer-version').then((disclaimer) => {
      expect(disclaimer).to.equal('versionOne');
    });
  });

  it('Displays the nav bar', () => {
    cy.get('header').contains('Hazard Curves');
    cy.get('header').contains('Rupture Sets');
    cy.get('header').contains('Hazard Maps');
    cy.get('header').contains('Info & Input Files');
  });

  it('Displays h1', () => {
    cy.get('h1').contains('National Seismic Hazard Model');
  });

  it('displays intro text', () => {
    cy.get('p').contains('Welcome to the New Zealand NSHM. This is the 2022 revision to the model. Here’s a link back to the explanation and background info on the model.');
  });

  it('displays hazard card', () => {
    cy.get('div').contains('Hazard Curves to view');
  });

  it('displays hazard map card', () => {
    cy.get('div').contains('Hazard Maps to view');
  });

  it('displays rupture set card', () => {
    cy.get('div').contains('Rupture Sets to view');
  });

  it('displays info card', () => {
    cy.get('div').contains('Model Information, Reports, and Input Files');
  });

  it('Hazard Curves Nav Link works', () => {
    cy.visit('/');
    cy.get('button').contains('Accept').click();
    cy.get('header').contains('Hazard Curves').click();
    cy.url().should('include', '/HazardCurves');
  });

  it('Hazard Map Nav Link works', () => {
    cy.visit('/');
    cy.get('button').contains('Accept').click();
    cy.get('header').contains('Hazard Maps').click();
    cy.url().should('include', '/HazardMaps');
  });

  it('Rupture Set Nav Link works', () => {
    cy.visit('/');
    cy.get('button').contains('Accept').click();
    cy.get('header').contains('Rupture Sets').click();
    cy.url().should('include', '/RuptureSets');
  });

  it('Hazard Map Nav Link works', () => {
    cy.visit('/');
    cy.get('button').contains('Accept').click();
    cy.get('header').contains('Info & Input Files').click();
    cy.url().should('include', '/info');
  });
});
