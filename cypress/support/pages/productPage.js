class productPage {

    elements = {
        "productName": () => cy.get('h1'),
        "productPrice": () => cy.get('#our_price_display'),
        "productAddToCartBtn": () => cy.get('.exclusive > span'),
        "procceddToCheckoutBtn": () => cy.get('.button-medium > span')
    }

}

module.exports = new productPage();