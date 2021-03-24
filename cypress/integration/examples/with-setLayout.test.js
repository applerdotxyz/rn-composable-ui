describe("with-setLayout", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("with-setLayout");
      cy.contains("Home *** leftNavHeader");
      cy.contains("`RandomPic *** bodyHeader`");
      cy.contains("Home *** leftNavBody");
      cy.get(`[data-testid="c1"]`).contains("Hi");
      cy.contains("Home *** bodyHeader1");
      cy.contains("Home *** bodyContent");
      cy.contains("About *** bodyContent1");
      cy.contains("`RandomPic *** bodyContent2`");
      cy.get(`[data-testid="leftNavHeader-btn-one"]`).contains("ACT1").click();

      cy.contains("About *** bodyHeader");
      cy.contains("About *** bodyHeader1");
      cy.get(`[data-testid="c2"]`).contains("Hi user");
      cy.contains("ACT1");

    });
  });
  