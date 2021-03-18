describe("with-setLayout", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("with-setLayout");
      cy.contains("leftNavHeader");
      cy.get(`[data-testid="leftNavHeader-btn-one"]`).contains("ACT1").click();
      cy.contains("leftNavBody");
      cy.get(`[data-testid="c1"]`).contains("Hi");
      cy.contains("bodyHeader");
      cy.contains("bodyHeader1");
      cy.contains("bodyContent");
      cy.contains("bodyContent1");
      cy.contains("bodyContent2");
      cy.contains("bodyHeader");
      cy.contains("bodyHeader1");
      cy.get(`[data-testid="c2"]`).contains("Hi user");
      cy.contains("ACT1");
    });
  });
  