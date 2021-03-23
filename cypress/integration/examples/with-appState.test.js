describe("with-appState", () => {
  it("Config test", () => {
    // cy.visit("http://localhost:19006/");
    cy.visit("http://localhost:8080/");

    cy.contains("Examples");
    cy.get("select").select("with-appstate");
    cy.contains("Home *** leftNavHeader");
    cy.contains("Home *** leftNavBody");
    cy.contains("`RandomPic *** bodyHeader`");
    cy.contains("Home *** bodyHeader1");
    cy.contains("Home *** bodyContent");
    cy.contains("Home *** bodyContent1");
    cy.contains("Home *** bodyContent2");
    cy.contains("footer");
    cy.screenshot();
    cy.get(`[data-testid="leftNavHeader-btn-one"]`).contains("ACT1").click();
    cy.contains("About *** bodyHeader");
    cy.contains("`RandomPic *** bodyContent`");
    cy.screenshot();


    // ----------------Has to see how we can do visual testing i better way (TODO) ----------
    // cy.matchImageSnapshot('initialLayout');
    
    // cy.document().toMatchImageSnapshot({
    //   "name": "Before route",            // Naming resulting image file with a custom name rather than concatenating test titles
    //   "screenshotConfig": {            // See https://docs.cypress.io/api/commands/screenshot.html#Arguments
    //     "timeout": 80000
    //   },
    // });
    // cy.document().toMatchImageSnapshot({
    //   "name": "After route",            // Naming resulting image file with a custom name rather than concatenating test titles
    //   "screenshotConfig": {            // See https://docs.cypress.io/api/commands/screenshot.html#Arguments
        
    //     "timeout": 80000
    //   },
    // });
    // cy.matchImageSnapshot('layoutChanged');

    



  });
});
