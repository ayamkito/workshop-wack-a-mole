

let score = 0;
var scoreDisplay = document.getElementById('score');

// console.log(scoreDisplay);

var repeatition = setInterval(timer, 3000)
function timer(){
    var moleHole = Array.from(document.getElementsByClassName("hole"))
    var randomHoleIndex = Math.floor(Math.random()*Math.floor(moleHole.length))
    moleHole[randomHoleIndex].classList.toggle("mole")
}

var whackMole = document.getElementById("whack-a-mole")
whackMole.addEventListener("click", function(event) {
  if(event.target.matches(".mole")){
    console.log(true)
    score++
  }
})
console.log(score)
