const bemOuMal = (numero) =>{
  if(typeof numero === 'number'){
    if (numero != 0){
      if (numero%2==0){
        return "BEM-ME-QUER!"
      }
    return "MAL-ME-QUER!"
    }
  }
return "ERRO!"
}

module.exports = bemOuMal
