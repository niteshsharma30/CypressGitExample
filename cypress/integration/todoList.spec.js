/// <reference types="cypress" />
import { todoListPage } from "../support";

const sizes = ['iphone-6', 'ipad-2', 'iphone-xr', 'samsung-note9', 'samsung-s10'];

describe('Todo List Sample Test Suite', () => {
  sizes.forEach((size) => {
    describe(`Testing on ${size} device`, () => {
      beforeEach(() => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }
        cy.navigate('/')
      });

      it('should have the initial state visible', () => {
        cy.verifyElement(todoListPage.header, 'Today\'s tasks')
          .verifyElement(todoListPage.input)
          .verifyElement(todoListPage.addBtn);
      });

      describe('task list', () => {
        beforeEach(() => {
          cy.addTask('Task 1');
        });

        it('shoud be able to verify add task', () => {
          cy.contains('Task 1').should('be.visible');
        });

        it('should be able to remove task', () => {
          cy.removeTask(1)
          .task(1).should('not.exist');
        });
      });
    });
  });
});