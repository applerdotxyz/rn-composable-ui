describe("with-charts", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("with-charts");
      cy.contains("Home *** leftNavHeader");
      cy.contains("About *** bodyHeader");
      cy.screenshot();
      cy.get(`[data-testid="leftNavHeader-btn-one"]`).contains("ACT1").click();
      cy.screenshot();
    });
  });
  