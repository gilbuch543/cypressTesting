/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

const token = 'bla'

describe('Basic Test',() => {

beforeEach(() => {

  cy.viewport(1280,720)
  cy.visit('http://the-internet.herokuapp.com/dynamic_loading/2')
  //cy.then(()=>{
   // window.localStorage.setItem('_auth_token', token)
  })
})


    it('We have correct title in the page',() => {
        //cy.visit('http://the-internet.herokuapp.com/dynamic_loading/2')

        cy.url().then((value) => {
          cy.log('The current real URL is: ', value)
        })

        cy.contains('Dynamically Loaded Page Elements')
        //cy.get("#Start").click()
        //cy.xpath('//*[@id="start"]', {timeout:20000}).click({force:true})
        //cy.xpath('//*[text()="start"]', {timeout:20000}).click({force:true})
        //cy.viewport('samsung-s10')
        cy.log('going to click on button')//will print in testing
        cy.get('button')
    .then($button => {
      console.log($button[0].click)
    })
    .click()


    cy.contains('Hello World!', {timeout:20000}).should('exist')
    cy.url().should('include','http://the-internet.herokuapp.com/dynamic_loading/2')
    })

    //it.only
    it('Login should display correct error ',()=>{
      cy.visit('https://codedamn.com')
      cy.contains('Sign in').click()
      cy.contains('Unable to autorize').should('not.exist')

      cy.get('[data-testid=username]').type('admin')
      cy.get('[data-testid=password]').type('admin')

      cy.get('[data-testid="login"]').click()
      cy.contains('Unable to autorize').should('exist')
      //cy.pause() will let you play it 
      //cy.debug() f11 debugger will let you view elements..

      //cy.get('').then(el =>{
      //  expect(el.text()).to.eq('') get text in element
      //})

      //cy.get('').should('contain.text','blabla')


      const fileName = Math.random()

      cy.get('')
      .type('{ctrl}{c}')
      .type('testscript.${fileName}.js{enter}')

cy.contains('testscript.${filename}.js').should('exist')

      cy.get('')
      .type('{ctrl}{c}')
      .type('blabla{enter}')

cy.contains('testscript.${fileName}.js').rightclick()
cy.contains('bla').click()
cy.contains('testscript.${filename}.js').type('new_.${filename}.js')



    })
    


