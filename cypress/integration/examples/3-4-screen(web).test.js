describe("3-4-screen(web)", () => {
    it("Config test", () => {
      cy.visit("http://localhost:19006/");
      cy.contains("Examples");
      cy.get("select").select("3_4-screen-example-web");
      cy.contains("Category").click();
      cy.contains("Sub Category");
      cy.contains("bodyHeader");
      cy.contains("Home *** bodyContent");
      cy.get(`input[value="8654787549"]`).clear().type("9874563210").blur();
      cy.get(`input[value="654789"]`).clear().type("12345");
      cy.contains("Submit").click();
      cy.contains("Submit").click();
      //below one is givin problem related to re-ender tried pause aand also wait
      
      // cy.get(`[data-testid="phone_num_verify"]`).wait(5000).contains("Verified Phone No:- 9874563210");
      // cy.get(`[data-testid="phone_num_verify"]`).pause().contains("Verified Phone No:- 9874563210");
      // cy.get(`[data-testid="phone_num_verify"]`).contains("Verified Phone No:- 9874563210");
      cy.contains("Verified Phone No:- 9874563210");
      cy.contains("Submit").click();
      cy.contains("Name");
      cy.contains("Category");
      cy.contains("SubCategory");
      cy.get(`input[placeholder="Enter Keyword to Search"]`).type("shah");
      cy.contains("Mr. Shah");
      cy.contains("Electricity");
      cy.contains("Short circuit");
    });
  });
  