const bemMeQuer = (n) =>{
  if(typeof n == 'number') {
    if(n % 2 == 0){
      return 'Bem-me-quer'
    }
    if (n %2 == 1){
      return 'Mal-me-quer'
    }
  }
  return "ERRO"
}

module.exports = bemMeQuer
