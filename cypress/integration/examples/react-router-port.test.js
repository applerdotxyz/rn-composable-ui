describe("react-router-port", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("react-router-port");
      cy.contains("left-nav")
      cy.contains("body-header")
      cy.contains("body-content")
      cy.contains("body-footer")
      cy.contains("footer")
    });
  });
  