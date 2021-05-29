describe("dashboard-demo", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("dashboard-demo");
      cy.contains("DefaultScreen *** header-label");
      cy.contains("TabDashboard *** tabComponent");
      cy.contains("Create");
      cy.contains("Search");
      cy.contains("DefaultScreen *** DefaultScreenComponent");
      cy.wait(5000)
      cy.contains("Foundation").click();
      cy.contains("Sales").click();
      cy.scrollTo("bottom");
      cy.contains("First name");
      cy.get(`input[value="Raj"]`).clear().type("Shyam").blur();
      cy.contains("Last name");
      cy.get(`input[value="Shah"]`).clear().type("Patel").blur();
      cy.contains("Gender");
      cy.get(`input[value="Male"]`).click().blur();
    //   cy.get(`input[value="Female"]`).click();
     cy.contains("Select your Birthdate");
     cy.get(`input[value="11/01/2021"]`).clear();
    //  wait(2000).focus().type("02/04/2000").blur();
     cy.contains("Username");
     cy.get(`input[value="raj@1234"]`).clear().type("shyam@1234").blur();
     cy.contains("Password");
    //  cy.get(`input[value="Raj@123"]`).clear().focus().type("Shyam@123").blur();
     cy.contains("Confirm password");
    //  cy.get(`input[value="Raj@123"]`).clear().type("Shyam@123").blur();












    });
  });
  