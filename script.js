const btnPlay = document.querySelector('#btn')

btnPlay.addEventListener('click', promptFunction)


function promptFunction() {
    let player = prompt("Please enter your name", " ");
    if (player != null) {

      document.getElementById("demo").innerHTML =
      "Hello " + player + " Let play!";
      window.open(game.html)
    }
  }


// =========> space battle JS==========//

// Create hero and alien objects

const heroSpaceship = {
  hull : 20,
  firepower : 5,
  accuracy : 7
}
console.log(heroSpaceShip)

const alienship = {
  hull : [3, 4, 5, 6],
  firepower : [2, 3, 4],
  accuracey : [6, 7, 8]
}
  console.log(alienship)

  //attack 

