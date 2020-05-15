describe('Mind format successful registration', () => {
  it('Mindformat web site', () => {
    cy.visit('https://mindformat.ru')
    cy.contains('Регистрация')
  })
})