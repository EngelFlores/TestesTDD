const ola = require ("../funcaoOla")
const {expect} = require ('chai')

describe ("arquivo ola", () =>{
  it ("Deve retornar olá", () => {
    expect (ola()).to.be.eq("Olá")
  })
})
