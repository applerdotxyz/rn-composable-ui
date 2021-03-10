describe("My First Test", () => {
  it("Demo test", () => {
    cy.visit("https://19006-ivory-caribou-34aglpfd.ws-us03.gitpod.io");
    cy.contains("Examples");
    cy.get("select").select("with-setLayout (without hide)");
    cy.contains("footer");
    cy.contains("ACT1").click();
    cy.contains("about");
    cy.contains("footer1");
    cy.contains("AboutFlash").click();
    cy.contains("randompic");
    cy.contains("footer2");
    cy.contains("Next").click();

    // cy.contains("Back").click();
    // cy.contains("ACT1").click();

    // cy.contains("Next").click().contains("footer2");
    // cy.contains("Back").click().contains("about");
    // cy.contains("Back").click().contains("home");
  });
});
