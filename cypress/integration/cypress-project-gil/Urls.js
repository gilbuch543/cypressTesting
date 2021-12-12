class urls {


    navigateToMainTestPage(){
        cy.visit('http://the-internet.herokuapp.com/dynamic_loading/2')

        cy.url().should('include', '/dynamic_loading/2') // => true

    }


        navigateToSecondTestPage(){
            cy.visit('https://the-internet.herokuapp.com/tinymce')
    
            cy.url().should('include', '/tinymce') // => true
    
        }

            printUrl(){
                cy.url().then((value) => {
                    cy.log('The current real URL is: ', value)
                  })
                }
}


export default urls