describe("RN Compose Test", () => {
  it("check all needed is present", () => {
    cy.visit("http://localhost:8080/");
    console.log(`USER is ${process.env.ADMIN_USER}`);
    console.log(`PASSWORD is ${process.env.ADMIN_PWD}`);
    cy.contains("Current User is :: ");
    // cy.contains("A TEXT THAT FAILS THIS TEST");
  });
});
