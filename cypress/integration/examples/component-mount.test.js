describe("another-grid", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("component-mount");
      cy.get(`[role="button"]`).get('[data-testid="bodyHeader-btn-one"]').contains("AboutFlash");
      cy.contains("bodyHeader");
    });
  });
  