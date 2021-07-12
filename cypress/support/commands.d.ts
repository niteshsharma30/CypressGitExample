declare namespace Cypress {
  interface Chainable {
     navigate(url?: string): Chainable;
     removeTask(index?: number): Chainable;
     task(index?: number): Chainable;
     addTask(task?: string): Chainable;
     verifyElement(element?: any, text?: string): Chainable;
  }
}