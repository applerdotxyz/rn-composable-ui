describe("with-setLayout (without hide)", () => {
  it("Config test", () => {
    // cy.visit("http://localhost:19006/");
    cy.visit("http://localhost:8080/");

    cy.contains("Examples");
    cy.get("select").select("with-setLayout (without hide)");
    // cy.viewport(999, 1800)
    cy.contains("Home *** home");
    cy.contains("footer");
    cy.contains("ACT1").click();
    cy.contains("About *** about");
    cy.contains("footer1");
    cy.contains("Next").click();
    cy.contains("About *** about changed -1");
    cy.contains("`RandomPic *** randompic`");
    cy.contains("footer2");
    cy.contains("Back").click();
    cy.contains("footer1");
    cy.contains("About *** about");
    cy.contains("Back").click();
    cy.contains("footer");
    cy.contains("Home *** home");
  });
});
