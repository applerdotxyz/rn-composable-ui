describe("todo-app", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("todo-app");
      cy.contains("SideNavBar *** sideNavBar");
      cy.contains("SideNavBar *** defaultScreen");
      cy.contains("DEMO FOR TODO APP");
      cy.contains("TODO APP DEMO").click();
      cy.contains("TodoApp1 *** todoAppComponent1");
      cy.get(`input[placeholder="Add a task"]`).type("Task added").blur();
      cy.get(`[role="button"]`).contains("Add").click();
      // cy.contains("0) Task added");
      // cy.get(`[role="button"]`).contains("Back").click();

    });
  });
  