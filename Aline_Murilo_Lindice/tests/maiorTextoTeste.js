const maiorTexto = require('../maiorTexto.js')
const {expect} = require ('chai')

describe ("Retornar o texto com maior numero de caracteres",() => {
  it("testando se o array de strings é valido", () => {
    expect(maiorTexto([])).to.be.eq("ERRO")
  })
})
