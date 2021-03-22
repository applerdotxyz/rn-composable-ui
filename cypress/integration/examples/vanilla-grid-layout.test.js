describe("vanilla-grid-layout", () => {
    it("Config test", () => {
      cy.visit("http://localhost:8080/");
      cy.contains("Examples");
      cy.get("select").select("vanilla-grid-layout");
      cy.contains("Home");
      cy.contains("Feed");
      cy.contains("Messages");
      cy.contains("Home *** left-nav");
      cy.contains("Home *** body-header");
      cy.contains("Home *** body-content-1");
      cy.contains("Home *** body-content-2");
      cy.contains("About *** footer");
      cy.contains("Home *** body-footer");
    });
  });
  