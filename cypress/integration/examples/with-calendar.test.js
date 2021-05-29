describe("with-calendar", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("with-calendar");
      cy.wait(6000)
      cy.screenshot()
      cy.contains("Home *** leftNavHeader")
      cy.get(`[role="button"]`).get('[data-testid="leftNavHeader-btn-one"]').contains("ACT1").click()
      cy.screenshot()
    });
  });
  