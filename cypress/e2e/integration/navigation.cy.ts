describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("links are working", async () => {
    cy.get(".search-bar__input").type("HelloWorld");
    cy.get("button").contains('Search').click();
    cy.url().should('include', '/search/HelloWorld');
    const movieCardTitle = await getText(".movie-resume-container__title");
    cy.get(".movie-card").first().click();
    const movieHeaderTitle = await getText(".movie-details__content__title");
    expect(movieCardTitle).to.eq(movieHeaderTitle);
  });
});

const getText = (getIndentifier: string): Promise<string> => {
  return new Promise((resolve) => { 
    return cy
    .get(getIndentifier)
    .first()
    .invoke('text')
    .then((movieTitle) => resolve(movieTitle));
   })
}