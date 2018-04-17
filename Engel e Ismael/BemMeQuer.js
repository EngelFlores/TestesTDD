const BemMeQuer = (numero) => {
  if (typeof numero != 'number') {
    return 'Mensagem de erro'
  } else if (numero % 2 === 0) {
    return 'Bem-me-quer'
  } else {
      return 'Mal-me-quer'
  }
}

module.exports = BemMeQuer
