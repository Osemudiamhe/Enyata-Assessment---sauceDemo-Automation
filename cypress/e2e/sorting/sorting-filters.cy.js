describe('Product Sorting and Filtering', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
    });
  
    it('should sort products by Name (A to Z)', () => {
      cy.get('[data-test="product-sort-container"]').should('be.visible').select('az');
      cy.get('.inventory_item_name').then(($items) => {
        const names = $items.map((index, el) => Cypress.$(el).text()).get();
        const sortedNames = [...names].sort();
        expect(names).to.deep.equal(sortedNames);
      });
    });
  
    it('should sort products by Name (Z to A)', () => {
      cy.get('[data-test="product-sort-container"]').should('be.visible').select('za');
      cy.get('.inventory_item_name').then(($items) => {
        const names = $items.map((index, el) => Cypress.$(el).text()).get();
        const sortedNames = [...names].sort().reverse();
        expect(names).to.deep.equal(sortedNames);
      });
    });
  
    it('should sort products by Price (low to high)', () => {
      cy.get('[data-test="product-sort-container"]').should('be.visible').select('lohi');
      cy.get('.inventory_item_price').then(($items) => {
        const prices = $items.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
      });
    });
  
    it('should sort products by Price (high to low)', () => {
      cy.get('[data-test="product-sort-container"]').should('be.visible').select('hilo');
      cy.get('.inventory_item_price').then(($items) => {
        const prices = $items.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).to.deep.equal(sortedPrices);
      });
    });
  });
  