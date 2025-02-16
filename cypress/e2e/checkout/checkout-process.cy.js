describe('Checkout Process', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    });
  
    it('should complete the checkout process', () => {
      // Add item to cart
      cy.get('.inventory_item').first().find('button').click();
      cy.get('.shopping_cart_link').click();
  
      // Proceed to checkout
      cy.get('[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one.html');
  
      // Enter checkout details
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two.html');
  
      // Finish checkout
      cy.get('[data-test="finish"]').click();
      cy.url().should('include', '/checkout-complete.html');
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
  });
  