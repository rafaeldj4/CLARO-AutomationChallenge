class MyAccountPage {

    elements = {
        "myAccountHeading": () => cy.get('.page-heading'),
        "userLoginName": () => cy.get('.account > span'),
        "myAddressesBtn": () => cy.get('.myaccount-link-list > :nth-child(3) > a > span'),
        "myPersonalInformationBtn": () => cy.get('.myaccount-link-list > :nth-child(4) > a > span'),
        "myAddressInfo": () => cy.get(".last_item li span"),
        "backToYourAccountBtn": () => cy.get('.footer_links > :nth-child(1) > .btn > span')
    }

    yourPersonalInformation = {
        "yourPersonarInformationHeading": () => cy.get('.page-subheading'),
        "currentPassword_input": () => cy.get('#old_passwd'),
        "newPassword_input": () => cy.get('#passwd'),
        "confirmationPassword_input": () => cy.get('#confirmation')
    }

}

module.exports = new MyAccountPage()