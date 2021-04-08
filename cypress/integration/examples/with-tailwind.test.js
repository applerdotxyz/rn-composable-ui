describe("with-tailwind", () => {
    it("Config test", () => {
      cy.visit("/");
      cy.contains("Examples");
      cy.get("select").select("with-tailwind");
      cy.contains("Tailwind Contact Form Demo");
      cy.get(`input[placeholder="Your Name"]`).type("Raj").blur();
      cy.get(`input[placeholder="Your Number"]`).type("9874563210").blur();
      cy.get(`input[placeholder="Enter email"]`).type("test@gmail.com").blur();
      cy.get(`textarea[placeholder="Tell us about desired property"]`).type("Just for testing purpose").blur();
      cy.contains("GDPR Agreement *");
      cy.contains("I consent to having this website store my submitted information so they can respond to my inquiry.");
      cy.contains("submit").click()
    });
  });
  