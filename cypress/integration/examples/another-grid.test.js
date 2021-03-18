describe("another-grid", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("another-grid");
      cy.get(`[role="button"]`).get('[data-testid="home-btn-one"]').contains("ACT1");
      cy.get(`[role="button"]`).get('[data-testid="about-btn-one"]').contains("AboutFlash");
      cy.get(`[role="button"]`).get('[data-testid="actioncomp-btn-one"]').contains("Next");
      cy.get(`[role="button"]`).get('[data-testid="actioncomp-btn-two"]').contains("Back");
      cy.contains("home");
      cy.contains("about");
      cy.contains("comp5.11");
      cy.contains("comp5.12");
      cy.contains("comp5.13");
      cy.contains("actioncomp");
      cy.contains("rpic");
    });
  });
  