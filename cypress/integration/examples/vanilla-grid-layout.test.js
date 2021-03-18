describe("vanilla-grid-layout", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("vanilla-grid-layout");
      cy.contains("Home");
      cy.contains("Feed");
      cy.contains("Messages");
      cy.contains("left-nav");
      cy.contains("body-header");
      cy.contains("body-content-1");
      cy.contains("body-content-2");
      cy.contains("footer");
      cy.contains("body-footer");
    });
  });
  