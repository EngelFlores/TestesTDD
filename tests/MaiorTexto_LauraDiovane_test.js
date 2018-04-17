const maiorTexto = require ("../maiorTexto")
const {expect} = require ('chai')

describe ("maiorTexto", () =>{

  it("Deve receber um array", () => {
    expect(maiorTexto([1, 2, 3])).to.be.eq("Array")
  })

  it("Deve receber uma string", () => {
    expect(maiorTexto('5')).to.be.eq("Maior")
  })

})
