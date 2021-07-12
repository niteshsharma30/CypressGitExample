/// <reference types="cypress" />
import { todoListPage } from "./pages/TodoListPage";

Cypress.Commands.add('navigate', (url) => {
  cy.log(`Navigating to ${url}`);
  cy.visit(url);
});

Cypress.Commands.add('removeTask', (index) => {
  cy.get(`:nth-child(${index}) > .r-backgroundColor-14lw9ot`)
    .should('be.visible').click();
});

Cypress.Commands.add('addTask', (task) => {
  cy.get(todoListPage.input).should('be.visible').type(`${task}`)
    .get(todoListPage.addBtn).should('be.visible').click({ multiple: true })
    .get(todoListPage.input).clear();
});

Cypress.Commands.add('verifyElement', (element, text = '') => {
  cy.get(`${element}`).should('be.visible')
    .and('contains.text', `${text}`);
});

Cypress.Commands.add('task', (index) => {
  cy.get(`:nth-child(${index}) > .r-backgroundColor-14lw9ot`);
});