class shoppingCartPage {

    elements = {
        "proceedToCheckoutBtn": () => cy.get('.cart_navigation > .button > span'),
        "adressProceedToCheckoutBtn":() => cy.get('.cart_navigation > .button > span'),
        "termOfServiceCheckout":() => cy.get('#cgv'),
        "ShippingProceedToCheckoutBtn": () => cy.get('.cart_navigation > .button > span'),
        "payByCheckBtn": () => cy.get('.cheque'),
        "iConfirmMyOrderBtn": () => cy.get('#cart_navigation > .button > span'),
        "backToOrdersBtn": () => cy.get('.button-exclusive')
    }

}

module.exports = new shoppingCartPage()