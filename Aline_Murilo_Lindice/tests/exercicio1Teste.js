const OLA = require('../OLA')
const {expect} = require ('chai')

describe ("arquivoOLA",() => {
  it("deve retornar OLA", () => {
  expect(OLA()).to.be.eq('OLA')
})
})
