describe("app-three", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("app-three");
      cy.contains("Category").click();
      cy.contains("Sub Category");
      cy.contains("Tab 1");
      cy.contains("Tab 2").click();
      cy.contains("Home *** bodyContent");
      cy.contains("Home *** footer");
    });
  });
  