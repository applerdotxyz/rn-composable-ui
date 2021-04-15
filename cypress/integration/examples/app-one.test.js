describe("app-one", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("app-one");
      cy.contains("About *** leftNavHeader");
      cy.contains("About *** bodyHeader");
      cy.contains("Home *** leftNavBody");
      cy.contains("Home *** bodyContent");
      cy.contains("Home *** footer");
    });
  });
  