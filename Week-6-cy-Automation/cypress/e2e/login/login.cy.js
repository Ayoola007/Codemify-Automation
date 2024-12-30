describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with an existing account as an admin', () => {
    cy.get('[href="/auth/login"]').click()
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('DontTestMe');
    cy.contains('button', 'Login').click();

    cy.get('a p').should('have.text', 'role: admin')
    cy.title().should('eq', 'User: Profile | Delek Homes') 
   
  })
})

