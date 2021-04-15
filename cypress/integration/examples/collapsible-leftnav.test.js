describe("collapsible-leftnav", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("collapsible-leftnav");
      cy.contains("Home *** leftNavHeader");
      cy.contains("Home *** leftNavBody");
      cy.contains("About *** bodyHeader");
      cy.contains("Home *** bodyContent");
      cy.contains("Home *** footer");
    });
  });
  