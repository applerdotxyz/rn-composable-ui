describe("RN Compose Test", () => {
  it("check all needed is present", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Current User is :: ");
    cy.contains("A TEXT THAT FAILS THIS TEST");
  });
});
