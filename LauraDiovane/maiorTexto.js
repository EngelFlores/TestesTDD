const maiorTexto = (palavras) =>{
    if(Array.isArray(palavras)){
      for(let i=0; i<palavras.length; i++){
        if(typeof palavras[i]==='string'){
          return "Maior"
        }
      }
      return "Array"
    }
  }

module.exports = maiorTexto
