/// <reference types="cypress" />
import homePage from "../../support/pages/homePage"
import signupPage from "../../support/pages/signupPage";
import myAccountPage from "../../support/pages/myAccountPage"
import productPage from "../../support/pages/productPage"
import shoppingCartPage from "../../support/pages/shoppingCartPage"

describe("Test Suite: Escenarios Automation Practice", ()=>{

    let the;
    let userEmail;
    before("Load Data",()=>{
        cy.fixture("data").then((data)=>{
            the = data
            userEmail = `${the.user.name}${signupPage.getRandomEmail("@gmail.com",2).toLowerCase()}`
        })

    })

    beforeEach("Precondiciones: El usuario debe de estar en la pagina: http://automationpractice.com/index.php",()=>{
        cy.visit(the.url)
        cy.url().should("contain","http://automationpractice.com/index.php")
    })

    it("TC1: Crear Cuenta",()=>{
        //1	Hacer click en el link "Sign in" de la barra de navegacion
        homePage.elements.signInBtn().click()
        signupPage.elements.autehnticationHeading().should("be.visible")
        //2	Ingresar el Email en el campo "Email address" de la seccion: CREATE AN ACCOUNT y hacer click en el boton "Create an account"
        signupPage.typeEmailAddress(userEmail)
        signupPage.elements.createAccountBtn().click()
        signupPage.elements.YourPersonalInfomationHeading().should("be.visible")
        //3	"Llenar los campos:
        //Seccion_YOUR PERSONAL INFORMATION: ""Title"", ""First name"", ""Last name"", ""Email"", ""Password"", ""Date of Birth"", ""Checkbox: Sign up for out newsletter!"", ""Checkbox: Receive special offers from our partners!""
        signupPage.yourPersonalInformationForm.mr_titleGender().check()
        signupPage.typeFirstname(the.user.name)
        signupPage.typeLastname(the.user.lastname)
        signupPage.yourPersonalInformationForm.email_input().should("have.value",userEmail)
        signupPage.typePassword(the.user.password)
        signupPage.selectDateOfBirth(the.user.dateOfBirth.day,the.user.dateOfBirth.month,the.user.dateOfBirth.year)
        signupPage.yourPersonalInformationForm.signupNewsletter_checkbox().check().should("be.checked")
        signupPage.yourPersonalInformationForm.receiveSpecialOffers_checkbox().check().should("be.checked")
        
        //Seccion_YOUR ADDRESS: ""First name"", ""Last name"", ""Company"", ""Address"", ""Address (Line 2), ""City"", ""State"", ""Zip/Postal Code"", ""Country"", ""Additional Information"", ""Home Phone"", ""Mobile Phone"", ""Assign an address alias for future reference"" "
        signupPage.yourAddressForm.firstname_input().should("have.value",the.user.name)
        signupPage.yourAddressForm.lastname_input().should("have.value",the.user.lastname)
        signupPage.typeCompany(the.user.company)
        //address1,address2,city,state,zipcode,country
        signupPage.typeAddressInfo(the.user.address,the.user.address2,the.user.city,the.user.state,the.user.zipcode,the.user.country)
        signupPage.typeAdditionalInfo(the.user.message)
        signupPage.typePhoneNumbers(the.user.phoneNumber,the.user.phoneNumber)
        signupPage.yourAddressForm.addressAlias().should("have.value","My address")
        //4	Hacer click en el boton "Register"
        signupPage.yourAddressForm.registerBtn().click()
        myAccountPage.elements.myAccountHeading().should("be.visible").and("contain.text","My account")
        myAccountPage.elements.userLoginName().should("be.visible").and("contain",`${the.user.name} ${the.user.lastname}`)
        //5	"Validar cuenta creada: Hacer click en el boton ""MY ADDRESS"" de la seccion MY ACCOUNT"
        myAccountPage.elements.myAddressesBtn().click()
        myAccountPage.elements.myAddressInfo().should("be.visible").and("contain",the.user.name).and("contain",the.user.lastname).and("contain",the.user.address)
        //6	Hacer click en el boton "Back to your account" > Hacer click en el boton "MY PERSONAL INFORMATION"
        myAccountPage.elements.backToYourAccountBtn().click()
        myAccountPage.elements.myPersonalInformationBtn().click()
        myAccountPage.yourPersonalInformation.yourPersonarInformationHeading().should("be.visible").and("contain","Your personal information")
        signupPage.yourPersonalInformationForm.mr_titleGender().should("be.checked")
        signupPage.yourAddressForm.firstname_input().should("have.value",the.user.name)
        signupPage.yourAddressForm.lastname_input().should("have.value",the.user.lastname)
        signupPage.yourPersonalInformationForm.email_input().should("have.value",userEmail)
        signupPage.yourPersonalInformationForm.dateOfBirthDay_input().should("have.value",the.user.dateOfBirth.day)
        signupPage.yourPersonalInformationForm.dateOfBirthMonth_input().should("have.value",the.user.dateOfBirth.month)
        signupPage.yourPersonalInformationForm.dateOfBirthYear_input().should("have.value",the.user.dateOfBirth.year)
        myAccountPage.yourPersonalInformation.currentPassword_input().should("not.have.value")
        myAccountPage.yourPersonalInformation.newPassword_input().should("not.have.value")
        myAccountPage.yourPersonalInformation.confirmationPassword_input().should("not.have.value")
        signupPage.yourPersonalInformationForm.signupNewsletter_checkbox().should("be.checked")
        signupPage.yourPersonalInformationForm.receiveSpecialOffers_checkbox().should("be.checked")
        //7	"Cerrar session: Hacer click en el boton ""Sign out"""
        homePage.elements.signOutBtn().click()
        signupPage.elements.autehnticationHeading().should("be.visible")
        myAccountPage.elements.userLoginName().should("not.exist")
    })

    it("TC2: Iniciar session con credenciales validas",()=>{
        //1	Hacer click en el link "Sign in" de la barra de navegacion
        homePage.elements.signInBtn().click()
        signupPage.elements.autehnticationHeading().should("be.visible")
        //2	Ingresar el Email en el campo "Email address" > Ingresar la contraseña en el campo "Password" de la seccion: ALREADY REGISTERED? y hacer click en el boton "Sign in"
        signupPage.yourPersonalInformationForm.email_input().type(the.user.email)
        signupPage.typePassword(the.user.password)
        signupPage.elements.signInBtn().click()
        myAccountPage.elements.myAccountHeading().should("be.visible").and("contain.text","My account")
        myAccountPage.elements.userLoginName().should("be.visible").and("contain",`${the.user.name} ${the.user.lastname}`)
        //3	"Cerrar session: Hacer click en el boton ""Sign out"""
        homePage.elements.signOutBtn().click()
        signupPage.elements.autehnticationHeading().should("be.visible")
        myAccountPage.elements.userLoginName().should("not.exist")

    })

    it("TC3: Realizar compra de un 'T-SHIRT' con el metodo de pago 'Pay by check' sin haber iniciado sesion",()=>{
        
        //1	Hacer click en el tab "T-SHIRTS"
        homePage.elements.tshirtBtn().click()
        homePage.t_shirtPage.tShirtHeading().should("be.visible").and("contain","T-shirts")
        homePage.t_shirtPage.product_list().should("have.length",1)
        //2	Hacer click sobre el "T-Shirt"
        homePage.t_shirtPage.products().eq(0).click()
        productPage.elements.productName().should("contain","T-shirts")
        //3	Hacer click en el boton "Add to Cart"
        productPage.elements.productAddToCartBtn().click()
        //4	Hacer click en el boton "Proceed to checkout"
        productPage.elements.procceddToCheckoutBtn().click()
        //5	Hacer click en el boton "Proceed to checkout"
        shoppingCartPage.elements.proceedToCheckoutBtn().click()
        //6 Ingresar el Email en el campo "Email address" > Ingresar la contraseña en el campo "Password" de la seccion: ALREADY REGISTERED? y hacer click en el boton "Sign in"
        signupPage.yourPersonalInformationForm.email_input().type(the.user.email)
        signupPage.typePassword(the.user.password)
        signupPage.elements.signInBtn().click()
        //7 Hacer click en el boton "Proceed to checkout"
        shoppingCartPage.elements.adressProceedToCheckoutBtn().click()
        //8	Hacer click en el "checkbox" Terms of Service > Hacer click en el boton "Proceed to checkout"
        shoppingCartPage.elements.termOfServiceCheckout().check()
        shoppingCartPage.elements.ShippingProceedToCheckoutBtn().click()
        //9	Hacer click en el metodo de pago "Pay by check"
        shoppingCartPage.elements.payByCheckBtn().click()
        //10 Hacer click en el boton "I confirm my order"
        shoppingCartPage.elements.iConfirmMyOrderBtn().click()
        //11"Validar compra del producto: Hacer click en el boton ""Back to orders"""
        shoppingCartPage.elements.backToOrdersBtn().click()
        

    })

})