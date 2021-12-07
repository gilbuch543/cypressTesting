/// <reference types="cypress" />

const { get } = require("cypress/types/lodash")

describe('Basic Test',() => {

    it('We have correct title in the page',() => {
        cy.visit('https://google.com')

        cy.contains('Gmail')
    })

})