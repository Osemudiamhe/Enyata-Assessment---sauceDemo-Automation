describe('Cart Functionality - Add and Remove Products', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('should add a product to the cart', () => {
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_badge').should('be.visible').and('contain', '1');
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('have.length', 1);  
    });
  
    it('should remove a product from the cart', () => {
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 1);
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('.cart_item').should('not.exist');
    });
  });
  