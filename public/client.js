//global vars
const result_block = document.getElementById("result");

function newGame(){
  
  //Make a V game about a W who X's a Y in Z
  var gameString = "Make a "

  //lists of things
  var adjectives = ["spooky", "scary", "bright", "happy", "retro", "fast", "falling", "shoot 'em up'", "western", "8 bit", ""]
  //characters come with a ' ' first and "n " if they start with a vowel.
  var characters = [" boy", " orphan", " girl", "n experiment", " frog", " goth teen", " fireman", "n explorer", " historian", " tree"]


  var choice = 0

  choice = Math.floor(Math.random() * adjectives.length);
  gameString = gameString + adjectives[choice] + " game about a"

  choice = Math.floor(Math.random() * characters.length)
  gameString = gameString + characters[choice]




  result_block.innerText = gameString
}

newGame()