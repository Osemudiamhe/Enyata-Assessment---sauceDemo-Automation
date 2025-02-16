describe('SauceDemo Login Tests', () => {
  const users = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'problem_user', password: 'secret_sauce' }
  ];

  beforeEach(() => {
    cy.visit('/');
  });

  users.forEach(user => {
    it(`should login successfully as ${user.username}`, () => {
      cy.get('[data-test="username"]').type(user.username);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('[data-test="login-button"]').click();

      // Allow time for redirect
      cy.url().should('contain', 'inventory.html');
      cy.get('.inventory_list').should('be.visible');

      // Logout process
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();

      // Ensure we're back on the login page
      cy.get('[data-test="login-button"]').should('be.visible');
    });
  });

  it('should show an error for incorrect credentials', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});
