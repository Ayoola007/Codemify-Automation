//Should log out
describe('Logout', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
   
it('Should log out', () => {
    cy.get('[href="/auth/login"]').click()
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('DontTestMe');
    cy.contains('button', 'Login').click();

    cy.get('a p').should('have.text', 'role: admin')
    cy.title().should('eq', 'User: Profile | Delek Homes')
    cy.get('.MuiButtonBase-root > .MuiAvatar-root > .MuiAvatar-img').click();
    cy.contains('Logout').click();

    cy.title().should('eq', 'Login | Delek Homes')  // check if it is logged out
    cy.contains('button', 'Login').should('exist')
    })
})
