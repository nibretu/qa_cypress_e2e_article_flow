// cypress/e2e/article.cy.js

const generateUniqueId = () => Math.random().toString(36).substring(2, 10);

describe('Article flow', () => {
  let user;

  before(() => {
    const uniqueId = generateUniqueId();
    user = {
      username: `testuser_${uniqueId}`,
      email: `testuser_${uniqueId}@mail.com`,
      password: 'TestPass123!'
    };

    // 1. Register the user ONCE before all tests
    cy.register(user.username, user.email, user.password);
  });

  beforeEach(() => {
    // 2. Login before EACH test (now matches the 2-argument signature)
    cy.login(user.email, user.password);
  });

  it('should create a new article', () => {
    // ... your test code ...
  });

  it('should delete an existing article', () => {
    // ... your test code ...
  });
});
