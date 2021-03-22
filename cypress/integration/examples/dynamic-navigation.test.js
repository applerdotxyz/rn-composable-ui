describe("dynamic-navigation", () => {
    it("Config test", () => {
      // cy.visit("http://localhost:19006/");
      cy.visit("http://localhost:8080/");

      cy.contains("Examples");
      cy.get("select").select("dynamic-navigation");
      cy.contains("Home *** leftNavHeader");
      cy.contains("About *** bodyHeader");
      cy.contains("ACT1").click();
      cy.contains("About *** bodyHeader-changed at 1st");
      cy.contains("AboutFlash").click();
      cy.contains("About *** bodyHeader-changed at 2nd");
      cy.contains("About *** bodyHeader1");
      cy.contains("Home *** bodyContent");
      cy.get(`[data-testid="bodyHeader1-btn-one"]`).contains("AboutFlash").click();
      cy.contains("About *** bodyHeader1-changed 1st");
      cy.contains("AboutFlash");
    });
  });
  