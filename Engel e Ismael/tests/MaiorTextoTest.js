// Maior texto
// Faça uma função chamada maiorTexto que receba um array de strings e retorne o texto com maior número de
// caracteres. Para testar:
// var batatasVariadas = new Array("Batata", "Batatão", "Batata-Gigante", "Batata Mega Hiper Blaster Chuck Norris");
// maiorTexto(batatasVariadas);

const MaiorTexto = require('../MaiorTexto')
const {expect} = require('chai')

describe("ArquivoMaiorTexto", () => {
  it ("Não deve aceitar numéro", () => {
    expect(MaiorTexto([12345])).to.be.eq('Mensagem de erro')
  })

  it ("O Array não dever ser vazio", () => {
    expect(MaiorTexto([])).to.be.eq('Mensagem de erro')
  })

  it ("O array deve aceitar string", () => {
    expect(MaiorTexto(["Batata", "Batatão", "Batata-Gigante", "Batata Mega Hiper Blaster Chuck Norris"])).to.not.be.eq('Mensagem de erro')
  })
})
