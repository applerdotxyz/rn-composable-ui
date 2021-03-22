describe("with-jsonforms", () => {
    it("Config test", () => {
      // cy.visit("http://localhost:19006/");
      cy.visit("http://localhost:8080/");

      cy.contains("Examples");
      cy.get("select").select("with-jsonforms");
      cy.contains("Home *** leftNavHeader");
      cy.contains("bodyHeader");
      cy.get(`input[value="8654787549"]`).clear().type("9874563210").blur();
      cy.get(`input[value="8888888888"]`).clear().type("9898989898").blur();
      cy.get(`input[value="654789"]`).clear().type("12345");
      cy.contains("Submit");
    });
  });
  