const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
  //  console.log("clicked")
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

// JS for Getting a random number 
function getRandomNumber() {
  return Math.floor(Math.random()*colors.length);
};