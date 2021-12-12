
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import MainPage from './MainPage';
import SecondPage from './SecondPage';
import Urls from './Urls';
import Example from '../../fixtures/example.json'



before(() => {
   // cy.fixture('example').as(example)
    //this.example=example
    // cy.fixture('./example').then(function (example) {
    //     EXAMPLE = example
    // })
})
beforeEach(() => {
    cy.log('about to test : ')  
    })

    it('mainPage Test Case',() => {
    
        const mainPage=new MainPage()
        const urls=new Urls()

        urls.navigateToMainTestPage()
        mainPage.isPageLoaded()
       // mainPage.isPageLoaded().contains('Dynamically Loaded Page Elements')
       // mainPage.isPageLoaded().contains('Example 2: Element rendered after the fact')
        mainPage.clickOnButtonAndVerify(7000)
    
        })

    it('second Test Case',() => {
    
            const secondPage=new SecondPage()
            const urls=new Urls()
    
            urls.navigateToSecondTestPage()

            secondPage.isPageLoaded()

            secondPage.accessIframeAndType(Example.text)
        
        })
