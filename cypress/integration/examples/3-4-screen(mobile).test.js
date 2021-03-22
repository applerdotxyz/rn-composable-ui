describe("3-4-screen(mobile)", () => {
    it("Config test", () => {
      cy.visit("http://localhost:8080/");
      cy.contains("Examples");
      cy.get("select").select("3_4-screen-example-mobile");
      cy.contains("Home *** leftNavHeader");
      cy.contains("About *** bodyHeader");
      cy.get(`[role="button"]`).get(`[data-testid="leftNavHeader-btn-one"]`).contains("ACT1").click();
      cy.contains("About *** bodyHeader-changed at 1st");
      cy.get(`[role="button"]`).get(`[data-testid="bodyHeader-changed at 1st-btn-one"]`).contains("AboutFlash").click();
      cy.contains("About *** bodyHeader-changed at 2nd");
      cy.contains("About *** bodyContent");
      cy.contains("Home *** bodyFooter");
      cy.get(`[role="button"]`).get(`[data-testid="bodyContent-btn-one"]`).contains("AboutFlash").click();
      cy.contains("About *** bodyContent-changed1");
      cy.get(`[role="button"]`).get(`[data-testid="bodyContent-changed1-btn-one"]`).contains("AboutFlash");
    });
  });
  