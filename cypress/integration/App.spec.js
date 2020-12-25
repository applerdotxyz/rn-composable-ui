describe("RN Compose Test", () => {
  it("check all needed is present", () => {
    cy.visit("http://localhost:8080/");
    expect(Cypress.env("ADMIN_PWD")).equal("Welcome@123");
    cy.get('[placeholder="Enter Keyword to Search"]')
      .first()
      .type(Cypress.env("ADMIN_USER"));
    console.log(`USER is ${Cypress.env("ADMIN_USER")}`);
    console.log(`PASSWORD is ${Cypress.env("ADMIN_PWD")}`);
    cy.contains("Current User is :: ");
    // cy.contains("A TEXT THAT FAILS THIS TEST");
  });
});
