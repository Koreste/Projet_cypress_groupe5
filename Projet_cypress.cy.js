describe("account test",()=>{
    
    it('Create a account',function(){
        cy.fixture('Projet_cypress').then( user => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains('Create an Account').click()
        cy.url().should('include', '/customer/account')
        cy.get('#firstname').type(user.prenom).should("have.value", user.prenom);
        cy.get('#lastname').type(user.nom).should("have.value", user.nom);
        cy.get('#email_address').type(user.email) .should("have.value", user.email);
        cy.get('#password').type(user.password) .should("have.value", user.password);
        cy.get('#password-confirmation').type(user.password).should("have.value", user.password);
        cy.get('#form-validate > .actions-toolbar > div.primary').click()
        cy.get('.current > strong').should('be.visible')
        cy.get('.message-success').should('be.visible').and('contain','Thank you for registering with Main Website Store.')
        cy.get('.box-content > p').should('be.visible').and('contain',user.prenom).and('contain',user.nom).and('contain',user.email)
        
    })
    })
    it('Sign In',function(){
        cy.fixture('Projet_cypress').then( user => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.contains('Sign In').click()
        cy.get('#email').type(user.email) .should("have.value", user.email);
        cy.get('#pass').type(user.password) .should("have.value", user.password);
        cy.get('#send2').click()
        cy.wait(3000)
        cy.contains('Sale').click()
        cy.get('#ui-id-8').click()
        cy.get(':nth-child(6) > :nth-child(1) > a').click()
        cy.get('img[alt="Driven Backpack"]').click()
        cy.get('#product-addtocart-button').click().should("be.visible", "You added Driven Backpack to your shopping cart.")       
        cy.wait(2000)
        cy.get('.counter-number').click()
        cy.get('#top-cart-btn-checkout').click()
        cy.wait(2000) 
        cy.get('.input-text[name="company"]').type(user.company)
        cy.get('.input-text[name="street[0]"]').type(user.adress1)
        cy.get('.input-text[name="street[1]"]').type(user.adress2)
        cy.get('.input-text[name="street[2]"]').type(user.adress3)
        cy.get('.input-text[name="city"]').type(user.city)
        cy.get('.input-text[name="postcode"]').type(user.codepostal)
        cy.get('.input-text[name="telephone"]').type(user.phone) 
        cy.get('select[name="country_id"]').select(user.country)
        cy.get('select[name="region_id"]').select(user.region)
        cy.get('input[type="radio"][value="flatrate_flatrate"]').check()
        cy.wait(3000)
        cy.get('.button > span').click()
        //cy.get('button[data-role="opc-continue"]').click()
        //cy.contains('button', 'Next').click()
        //cy.get('button.button.action.continue.primary').click()
        cy.wait(5000)
    
        cy.contains('span', 'Place Order').click()
        cy.contains('Thank you for your purchase!').should("be.visible")
    })
    })
    
})
