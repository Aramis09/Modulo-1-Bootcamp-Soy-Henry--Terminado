//Mi forma cacera porque no sabia que existia el metodo hasOwnProperty
function cacheFunction(cb){
  var cache=[]
  return function(propiedad){
  for(let i=0 ; i< cache.length ; i++){
    if(propiedad==cache[i].argumento){
      return cache[i].resultado
    }
    
  }
  cache.push({resultado:cb(propiedad), argumento: propiedad});
  return cache[cache.length-1].resultado
  }
}

// Es mejor el de matias
// La forma de matias que esta un poco mejor porque utiliza el metodo recomendado.

function cacheFunction(cb){
    var cache = {}
 return function (propiedad) {
  if(cache.hasOwnProperty(propiedad)){
    console.log(cache)
    return cache[propiedad]
  }
  else {
    cache[propiedad] = cb(propiedad)
    console.log(cache)
    return cache[propiedad]
  }
 }
}



