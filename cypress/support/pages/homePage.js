class homePage {

    elements = {
        "signInBtn": () => cy.get(".login"),
        "signOutBtn": () => cy.get('.logout'),
        "tshirtBtn": () => cy.get('.sf-menu > :nth-child(3) > a')

    }

    t_shirtPage = {
        "tShirtHeading": () => cy.get('.sf-menu > :nth-child(3) > a'),
        "product_list": () => cy.get('.product_list'),
        "products": () => cy.get(".product_list a.product_img_link"),

    }

}

module.exports = new homePage();