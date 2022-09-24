class signunPage {

    elements = {
        "autehnticationHeading": () => cy.get('.page-heading'),
        "emailAddress_Input": () => cy.get('#email_create'),
        "createAccountBtn": () => cy.get('#SubmitCreate > span'),
        "YourPersonalInfomationHeading": () => cy.get(':nth-child(1) > .page-subheading'),
        "signInBtn": () => cy.get('#SubmitLogin > span')
    }
    yourPersonalInformationForm = {
        "mr_titleGender": () => cy.get('#id_gender1'),
        "fisrtname_input": ()=> cy.get('#customer_firstname'),
        "lastname_input": ()=> cy.get('#customer_lastname'),
        "email_input": ()=> cy.get('#email'),
        "password_input": () => cy.get('#passwd'),
        "dateOfBirthDay_input": () => cy.get('#days'),
        "dateOfBirthMonth_input": ()=> cy.get('#months'),
        "dateOfBirthYear_input": () => cy.get('#years'),
        "signupNewsletter_checkbox": () => cy.get('#newsletter'),
        "receiveSpecialOffers_checkbox": () => cy.get('#optin')
    }

    yourAddressForm = {
        "firstname_input": () => cy.get('#firstname'),
        "lastname_input": () => cy.get('#lastname'),
        "company_input": () => cy.get('#company'),
        "address_input": () => cy.get('#address1'),
        "address2_input":() => cy.get('#address2'),
        "city_input": () => cy.get('#city'),
        "state_input": () => cy.get('#id_state'),
        "zipcode_input": () => cy.get('#postcode'),
        "country_input": () => cy.get('#id_country'),
        "additionalInformation_input": () => cy.get('#other'),
        "homePhone_input": () => cy.get('#phone'),
        "mobilePhone_input": () => cy.get('#phone_mobile'),
        "addressAlias": () => cy.get('#alias'),
        "registerBtn": () => cy.get('#submitAccount > span')
    }

    //Create Account Form
    typeEmailAddress(email){
        this.elements.emailAddress_Input().type(email) 
    }

    //Your Personal Information Form
    typeFirstname(fisrtname){
        this.yourPersonalInformationForm.fisrtname_input().type(fisrtname)
    }

    typeLastname(lastname){
        this.yourPersonalInformationForm.lastname_input().type(lastname)
    }

    typePassword(password){
        this.yourPersonalInformationForm.password_input().type(password)
    }

    selectDateOfBirth(day,month,year){
        this.yourPersonalInformationForm.dateOfBirthDay_input().select(day)
        this.yourPersonalInformationForm.dateOfBirthMonth_input().select(month)
        this.yourPersonalInformationForm.dateOfBirthYear_input().select(year)
    }

    //Your Address Form
    typeCompany(company){
        this.yourAddressForm.company_input().type(company)
    }

    typeAddressInfo(address1,address2,city,state,zipcode,country){
        this.yourAddressForm.address_input().type(address1)
        this.yourAddressForm.address2_input().type(address2)
        this.yourAddressForm.city_input().type(city)
        this.yourAddressForm.state_input().select(state)
        this.yourAddressForm.zipcode_input().type(zipcode)
        this.yourAddressForm.country_input().select(country)
    }

    typeAdditionalInfo(message){
        this.yourAddressForm.additionalInformation_input().type(message)
    }

    typePhoneNumbers(homephone,mobilePhone){
        this.yourAddressForm.homePhone_input().type(homephone)
        this.yourAddressForm.mobilePhone_input().type(mobilePhone)
    }

    //Email
    getRandomEmail(domain,length){
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + domain;
}


}

module.exports = new signunPage();