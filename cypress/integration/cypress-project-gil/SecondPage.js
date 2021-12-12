class SecondPage{

    isPageLoaded() {
        return cy.get('[class=example]');
    }


    accessIframeAndType(x){
    const getIframeDocument = cy
        .get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        getIframeDocument.clear().type(x)
    }

}

export default SecondPage