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
    cy.get('header').contains('Hazard');
    cy.get('header').contains('Ruptures');
    cy.get('header').contains('Coming Features');
    cy.get('header').contains('Resources');
    cy.get('header').contains('Help');
  });

  it('Displays h1', () => {
    cy.get('h1').contains('National Seismic Hazard Model');
  });

  it('displays hazard card', () => {
    cy.get('div').contains('Site hazard and UHS plots.');
  });

  it('displays hazard about card', () => {
    cy.get('div').contains('Background Information.');
  });

  it('displays hazard maps card', () => {
    cy.get('div').contains('Hazard levels across NZ.');
  });

  it('displays disaggregations card', () => {
    cy.get('div').contains('Source breakdowns.');
  });

  it('displays science reports card', () => {
    cy.get('div').contains('Model reports and datasets.');
  });

  it('displays coming features card', () => {
    cy.get('div').contains('Previews from our backlog');
  });
});

describe('NavBarLinks', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('button').contains('Accept').click();
  });

  it('Hazard Curves Nav Link works', () => {
    cy.get('header').contains('Hazard').click();
    cy.get('[role="menuitem"]').contains('Curves and Spectra').click({ force: true });
    cy.url().should('include', '/HazardCurves');
  });

  it('Disaggregations Nav Link works', () => {
    cy.get('header').contains('Hazard').click();
    cy.get('[role="menuitem"]').contains('Disaggregations').click({ force: true });
    cy.url().should('include', '/Disaggs');
  });

  it('Hazard Map Nav Link works', () => {
    cy.get('header').contains('Hazard').click();
    cy.get('[role="menuitem"]').contains('Hazard Maps').click({ force: true });
    cy.url().should('include', '/HazardMaps');
  });

  it('IFM nav link works', () => {
    cy.get('header').contains('Ruptures').click();
    cy.get('[role="menuitem"]').contains('Multi-Rupture Map').click({ force: true });
    cy.url().should('include', '/IFMAnalysis')
  })

  it('IFM nav link works', () => {
    cy.get('header').contains('Ruptures').click();
    cy.get('[role="menuitem"]').contains('Rupture Animation').click({ force: true });
    cy.url().should('include', '/RuptureAnimation')
  })

  it('Coming Features Nav Link works', () => {
    cy.get('header').contains('Coming Features').click({ force: true });
    cy.url().should('include', '/Previews');
  });

  it('Science Reports Link works', () => {
    cy.get('header').contains('Resources').click();
    cy.get('[role="menuitem"]').contains('Science reports').click({ force: true });
    cy.url().should('include', '/Resources/ScienceReports');
  });

  it('About Link works', () => {
    cy.get('header').contains('Help').click();
    cy.get('[role="menuitem"]').contains('About').click({ force: true });
    cy.url().should('include', '/About');
  });

  it('Technical Info Link works', () => {
    cy.get('header').contains('Help').click();
    cy.get('[role="menuitem"]').contains('Technical Info').click({ force: true });
    cy.url().should('include', '/TechInfo');
  });

  it('Contacts Link works', () => {
    cy.get('header').contains('Help').click();
    cy.get('[role="menuitem"]').contains('Contacts').click({ force: true });
    cy.url().should('include', '/Contacts');
  });
});
