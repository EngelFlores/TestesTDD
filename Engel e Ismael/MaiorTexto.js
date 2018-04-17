const MaiorTexto = (texto) => {
  let aux = 0
  let maior
  for (let i = 0; i < texto.length; i++) {
    if (typeof(texto[i]) != 'string') {
      return "Mensagem de erro"
      break
    } else {
      for (let b = 0; b < texto.length; b++) {
        if (texto[b].length > aux) {
          aux = texto[b].length
          maior = texto[b]
        }
      }
    }
    return maior
  }
  return "Mensagem de erro"
}
console.log(MaiorTexto(["Batata", "Batatão", "Batata-Gigante", "Batata Mega Hiper Blaster Chuck Norris"]));

module.exports = MaiorTexto
