describe("Home Page", () => {
  before(() => {
    // NB in cypress config we've set Pre 12 compatability
    // https://docs.cypress.io/guides/references/migration-guide#Simulating-Pre-Test-Isolation-Behavior
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it("Visits the Home Page", () => {
    cy.visit("/");
  });

  it("Displays the legal popup", () => {
    cy.contains("Disclaimer");
  });

  it("Accepts the legal popup", () => {
    cy.get("button").contains("Accept").click();
    cy.saveLocalStorage();
  });

  it("stores to local storage", async () => {
    cy.restoreLocalStorage();
    cy.getLocalStorage("disclaimer-version").then((disclaimer) => {
      expect(disclaimer).to.equal("versionOne");
    });
  });

  it("Displays the nav bar", () => {
    cy.get("header").contains("Hazard");
    cy.get("header").contains("Ruptures");
    cy.get("header").contains("Coming Features");
    cy.get("header").contains("Resources");
    cy.get("header").contains("Help");
  });

  it("Displays h1", () => {
    cy.get("h1").contains("National Seismic Hazard Model");
  });

  it("displays hazard card", () => {
    cy.get("div").contains("Site hazard and UHS plots.");
  });

  it("displays hazard about card", () => {
    cy.get("div").contains("Background Information.");
  });

  it("displays hazard maps card", () => {
    cy.get("div").contains("Hazard levels across NZ.");
  });

  it("displays disaggregations card", () => {
    cy.get("div").contains("Source breakdowns.");
  });

  it("displays science reports card", () => {
    cy.get("div").contains("Model reports and datasets.");
  });

  it("displays ruptures card", () => {
    cy.get("div").contains("Filter and animate ruptures.");
  });
});

describe("NavBarLinks", () => {
  before(() => {
    // NB in cypress config we've set Pre 12 compatability
    // https://docs.cypress.io/guides/references/migration-guide#Simulating-Pre-Test-Isolation-Behavior
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit("/");
    cy.get("button").contains("Accept").click();
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("Hazard Curves Nav Link works", () => {
    cy.get("header").contains("Hazard").click();
    cy.get('[role="menuitem"]').contains("Curves and Spectra").click({ force: true });
    cy.url().should("include", "/HazardCurves");
    cy.get("h2").contains("Hazard Curves and Uniform Hazard Spectra").should("exist");
  });

  it("Disaggregations Nav Link works", () => {
    cy.get("header").contains("Hazard").click();
    cy.get('[role="menuitem"]').contains("Disaggregations").click({ force: true });
    cy.url().should("include", "/Disaggs");
    cy.get("h2").contains("Disaggregations").should("exist");      
  });

  it("Hazard Map Nav Link works", () => {
    cy.get("header").contains("Hazard").click();
    cy.get('[role="menuitem"]').contains("Hazard Maps").click({ force: true });
    cy.url().should("include", "/HazardMaps");
    cy.get("h4").contains("Hazard Maps").should("exist");     
  });

  it("IFM nav link works", () => {
    cy.get("header").contains("Ruptures").click();
    cy.get('[role="menuitem"]').contains("Ruptures").click({ force: true });
    cy.url().should("include", "/RuptureMap");
    cy.get("h4").contains("Rupture Explorer").should("exist");     
  });

  it("Coming Features Nav Link works", () => {
    cy.get("header").contains("Coming Features").click({ force: true });
    cy.url().should("include", "/Previews");
    cy.get("h4").contains("Public API").should("exist");        
  });

  it("Science Reports Link works", () => {
    cy.get("header").contains("Resources").click();
    cy.get('[role="menuitem"]').contains("Science Reports").click({ force: true });
    cy.url().should("include", "/Resources/ScienceReports");
    cy.get("h2").contains("Science Reports").should("exist");    
  });

  it("Other Documents Link works", () => {
    cy.get("header").contains("Resources").click();
    cy.get('[role="menuitem"]').contains("Other Documents").click({ force: true });
    cy.url().should("include", "/Resources/OtherDocuments");
    cy.get("h2").contains("Other Documents").should("exist");    
  });

  it("Model Components Link works", () => {
    cy.get("header").contains("Resources").click();
    cy.get('[role="menuitem"]').contains("Model Components").click({ force: true });
    cy.url().should("include", "/Resources/ModelComponents");
    cy.get("h2").contains("Model Components").should("exist");    
  });
  
  it("Model Versions Link works", () => {
    cy.get("header").contains("Resources").click();
    cy.get('[role="menuitem"]').contains("Model Versions").click({ force: true });
    cy.url().should("include", "/Resources/ModelVersions");
    cy.get("h2").contains("Model Versions").should("exist");    
  });   

  it("About Link works", () => {
    cy.get("header").contains("Help").click();
    cy.get('[role="menuitem"]').contains("About").click({ force: true });
    cy.url().should("include", "/About");
    cy.get("h2").contains("About The NSHM").should("exist");     
  });

  it("Technical Info Link works", () => {
    cy.get("header").contains("Help").click();
    cy.get('[role="menuitem"]').contains("Technical Info").click({ force: true });
    cy.url().should("include", "/TechInfo");
    cy.get("h2").contains("Tech Info").should("exist");
  });

  it("Contacts Link works", () => {
    cy.get("header").contains("Help").click();
    cy.get('[role="menuitem"]').contains("Contacts").click({ force: true });
    cy.url().should("include", "/Contacts");
    cy.get("h2").contains("Contacts").should("exist");    
  });

  it("Releases Link works", () => {
    cy.get("header").contains("Help").click();
    cy.get('[role="menuitem"]').contains("Releases").click({ force: true });
    cy.url().should("include", "/Releases");
    cy.get("h2").contains("Releases").should("exist");
  });
});
