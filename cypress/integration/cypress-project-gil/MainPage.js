class MainPage {
  
    isPageLoaded() {
      
        cy.contains('Dynamically Loaded Page Elements').should('exist')
        cy.contains('Example 2: Element rendered after the fact').should('exist')  
        return cy.get('[class=example]')
     }

    clickOnButtonAndVerify(x){
        cy.get('button')
        .then($button => {
          console.log($button[0].click)
        })
        .click()

        cy.contains('Hello World!',{timeout:1*x}).should('exist')
    }

    
    
    }
    export default MainPage
    