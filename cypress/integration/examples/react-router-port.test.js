describe("react-router-port", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("react-router-port");
      cy.contains("Home *** left-nav")
      cy.contains("Home *** body-header")
      cy.contains("Home *** body-content")
      cy.contains("Home *** body-footer")
      cy.contains("Home *** footer")
    });
  });
  