// cypress/support/commands.js

// Command to register a new user
Cypress.Commands.add('register', (username, email, password) => {
  cy.request('POST', '/api/users', {
    user: {
      username,
      email,
      password
    }
  });
});

// Command to log in an existing user
Cypress.Commands.add('login', (email, password) => {
  cy.request('POST', '/api/users/login', {
    user: {
      email,
      password
    }
  }).then((response) => {
    // Save the token to local storage so Cypress knows we are logged in
    window.localStorage.setItem('jwt', response.body.user.token);
  });
});
