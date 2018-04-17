const ola = require('../ola')
const {expect} = require('chai')

describe("arquivoOla",() =>{

  it("deve retornar ola", () =>{
    expect(ola()).to.be.eq('Ola')
  })

})
