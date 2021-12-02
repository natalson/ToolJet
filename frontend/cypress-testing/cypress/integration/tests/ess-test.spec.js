/// <reference types="cypress" />

//import { Application } from "./Application";

describe('ESS tests', () => {
    it('ShowLoginScreen', () => {
        cy.visit('http://localhost:8082/login');
        cy.contains('Email address').should('exist');
        cy.get('.form-label');
        cy.get('.form-control');
    })

    it('ShowPassword', () => {
        cy.visit('http://localhost:8082/login');
        cy.contains('show password').should('exist');
        cy.get('input#check-input').should('not.be.checked');
        cy.get('[data-testid="passwordField"]').type('heslo');
        cy.get("[type='password']");
        cy.get('input#check-input').click();
        cy.get('input#check-input').should('be.checked');
        cy.get("[type='text']");
    })

    it('NewFolder', () => {
        cy.loginUser('dev@tooljet.io', 'password');
        cy.get('title').should('have.text', 'ToolJet - Dashboard');
        cy.get('[data-testid="newFolder"]')
        // cy.get('.form-control').type('folder');
    })

    it('ChangeTheme', () => {
        cy.loginUser('dev@tooljet.io', 'password');
        cy.get('title').should('have.text', 'ToolJet - Dashboard');
        cy.get('[data-testid="modeToggle"]').click();
    })


    it('FakeApplication', () => {
        cy.loginUser('dev@tooljet.io', 'password');
        cy.visit('http://localhost:8082/', {
            onBeforeLoad: win => {
                win.initialState = [
                    {
                        id: 0,
                        title: 'First app'
                    },
                    {
                        id: 1,
                        title: 'New app'
                    },
                    {
                        id: 3,
                        title: 'Best app'
                    },
                ]
            }
        })
        cy.get('[dara-testid="list-apps"]').should('have.length', 3);
        cy.contains('New app').should('exist');
        cy.get('li#3').should('exist');
    })
})