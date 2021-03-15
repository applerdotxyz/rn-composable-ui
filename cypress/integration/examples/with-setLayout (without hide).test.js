describe("with-setLayout (without hide)", () => {
  it("Config test", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Examples");
    cy.get("select").select("with-setLayout (without hide)");
    // cy.viewport(999, 1800)
    cy.contains("home");
    cy.contains("footer");
    cy.contains("ACT1").click();
    cy.contains("about");
    cy.contains("footer1");
    cy.contains("Next").click();
    cy.contains("randompic");
    cy.contains("footer2");
    cy.contains("Back").click();
    cy.contains("footer1");
    cy.contains("about");
    cy.contains("Back").click();
    cy.contains("footer");
    cy.contains("home");
  });
});
