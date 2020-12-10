describe("RN Compose Test", () => {
  it("check all needed is present", () => {
    cy.visit("https://rn-compose.vercel.app/");
    
    cy.contains("A TEXT THAT FAILS THIS TEST");
  });
});
