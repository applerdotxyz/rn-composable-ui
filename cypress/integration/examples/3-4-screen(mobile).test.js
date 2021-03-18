describe("3-4-screen(mobile)", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("3_4-screen-example-mobile");
      cy.contains("leftNavHeader");
      cy.contains("bodyHeader");
      cy.get(`[role="button"]`).get(`[data-testid="leftNavHeader-btn-one"]`).contains("ACT1").click();
      cy.contains("bodyHeader-changed at 1st");
      cy.get(`[role="button"]`).get(`[data-testid="bodyHeader-changed at 1st-btn-one"]`).contains("AboutFlash").click();
      cy.contains("bodyHeader-changed at 2nd");
      cy.contains("bodyContent");
      cy.contains("bodyFooter");
      cy.get(`[role="button"]`).get(`[data-testid="bodyContent-btn-one"]`).contains("AboutFlash").click();
      cy.contains("bodyContent-changed1");
      cy.get(`[role="button"]`).get(`[data-testid="bodyContent-changed1-btn-one"]`).contains("AboutFlash");
    });
  });
  