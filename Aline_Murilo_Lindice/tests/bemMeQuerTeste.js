const bemMeQuer = require('../bemMeQuer.js')
const {expect} = require ('chai')

describe ("Retorna Bem-me-quer se numero N for par ou Mal-me-quer impar",() => {

  it("deve retornar erro com parametro diferente de numero", () => {
  expect(bemMeQuer('a')).to.be.eq("ERRO")
  expect(bemMeQuer([])).to.be.eq("ERRO")
  expect(bemMeQuer()).to.be.eq("ERRO")
  })

  it('deve retornar bemMeQuer',() => {
    expect(bemMeQuer(4)).to.be.eq('Bem-me-quer')
  })

  it('deve retornar malMeQuer', () => {
    expect(bemMeQuer(1)).to.be.eq('Mal-me-quer')
  })

})
