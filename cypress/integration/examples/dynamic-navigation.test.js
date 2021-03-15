describe("dynamic-navigation", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("dynamic-navigation");
      cy.contains("leftNavHeader");
      cy.contains("bodyHeader");
      cy.contains("ACT1").click();
      cy.contains("bodyHeader-changed at 1st");
      cy.contains("AboutFlash").click();
      cy.contains("bodyHeader-changed at 2nd");
      cy.contains("bodyHeader1");
      cy.contains("bodyContent");
      cy.get(`[data-testid="bodyHeader1-btn-one"]`).contains("AboutFlash").click();
      cy.contains("bodyHeader1-changed 1st");
      cy.contains("AboutFlash");
    });
  });
  