// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Invalid lat, lon input")) {
    return false;
  }
  if (err.message.includes("Cannot read properties of undefined")) {
    return false;
  }
  if (err.message.includes("> Unexpected token < in JSON at position 0")) {
    return false;
  }
  if (err.message.includes("(No errors)")) {
    return false;
  }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
