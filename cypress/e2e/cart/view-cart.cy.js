describe('Cart Page View', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    });
  
    it('should display the cart page with added items', () => {
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('be.visible');
    });
  
    it('should show an empty cart when no items are added', () => {
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('not.exist');
    });
  });
  