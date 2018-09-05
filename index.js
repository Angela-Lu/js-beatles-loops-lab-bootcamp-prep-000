function theBeatlesPlay(musicians,instruments) {
  var array = []
  var i
  for (i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i])
   }
 return array
}

function johnLenninFacts(facts) {
  var array = []
  var i
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
  }
}