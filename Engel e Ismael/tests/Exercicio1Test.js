const Ola = require('../Ola')
const {expect} = require('chai')

describe("ArquivoOla", () => {
    it ("Deve retornar Olá", () => {
      expect(Ola()).to.be.eq("Ola")
    })
})
