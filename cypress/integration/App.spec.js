describe("RN Compose Test", () => {
  it("check all needed is present", () => {
    cy.visit(Cypress.env("DASHBOARD_URL"));
    expect(Cypress.env("ADMIN_PWD")).equal("Welcome@123");
    cy.get("input").first().type(Cypress.env("ADMIN_USER"), { force: true });
    console.log(`USER is ${Cypress.env("ADMIN_USER")}`);
    console.log(`PASSWORD is ${Cypress.env("ADMIN_PWD")}`);
    cy.contains("Search Filter Example");
    // cy.contains("A TEXT THAT FAILS THIS TEST");
  });
});
