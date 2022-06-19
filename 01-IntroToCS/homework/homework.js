'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  const reverse = num.split('').reverse().join('');
  var arr = []

  for ( var i= 0; i< reverse.length;i++){
  arr.push(Math.pow(2, [i])*reverse[i])
  }
  
  var final = arr.reduce((acc,item)=>{
     return acc+item
  })
  
  return final
}

function DecimalABinario(num) {
  // tu codigo aca
  var arr = []
  while(num > 0){
    arr.push(num%2)
    num = parseInt(num/2)
  }
  var final = arr.reverse().join("")
  return final

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}