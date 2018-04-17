// Bem-me-quer
// Faça uma função chamada bemMeQuer que receba por argumento o número de pétalas da margarida e retorne
// 'Bem-me-quer' ou 'Mal-me-quer'. Exemplo:
// bemMeQuer(4); // retorna 'Bem-me-quer'

const BemMeQuer = require('../BemMeQuer.js')
const {expect} = require('chai')

describe("ArquivoBemMeQuer", () => {
    it ("Testar se é string", () => {
      expect(BemMeQuer('12345')).to.be.eq('Mensagem de erro')
    })

    it("Não deve ser vazio", () => {
      expect(BemMeQuer()).to.be.eq("Mensagem de erro")
    })

    it ("Bem-me-quer", () => {
      expect(BemMeQuer(2)).to.be.eq("Bem-me-quer")
    })

    it ("Mal-me-quer", () => {
      expect(BemMeQuer(3)).to.be.eq("Mal-me-quer")
    })
})
