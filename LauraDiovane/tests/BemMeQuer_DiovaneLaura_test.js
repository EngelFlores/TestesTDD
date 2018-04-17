const bemOuMal = require ("../bemOuMal")
const {expect} = require ('chai')

describe ("bemOuMal", () =>{
  it("Deve receber apenas numeros", () => {
    expect(bemOuMal(2)).to.be.eq("BEM-ME-QUER!")
    expect(bemOuMal('u')).to.be.eq("ERRO!")
  })

  it("Deve retornar erro quando receber zero", () => {
    expect(bemOuMal(0)).to.be.eq("ERRO!")
  })

  it("Deve retornar bem-me-quer se receber numero par", () => {
    expect(bemOuMal(2)).to.be.eq("BEM-ME-QUER!")
  })

  it("Deve retornar mal-me-quer se receber numero impar", () => {
    expect(bemOuMal(1)).to.be.eq("MAL-ME-QUER!")
  })
})
