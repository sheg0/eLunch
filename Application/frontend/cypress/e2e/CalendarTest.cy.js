describe("Basic Calendar Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");

    cy.get("#username").type(Cypress.env("CYPRESS_TEST_USER"));
    cy.get("#password").type(Cypress.env("CYPRESS_TEST_PASSWORD"));
    cy.get("#kc-login").click();
  });
  it("should open the Calendar page", () => {
    const divList = [
      "sidebar-content",
      "sidebar-profile",
      "profile-container",
      "profile-content",
      "profile-logout",
      "Calendar-Header",
      "Calendar-Button-Container",
    ];

    divList.forEach((element) => {
      cy.get('div[class="' + element + '"]').should("exist");
    });

    cy.get('img[class="sidebar-logo"]').should("exist");
    cy.get('button[class="Calendar-NewMeal-Button"]').should("exist");
  });
});
