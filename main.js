// This variable stores the "Pick a Color" button
const originalButton = document.getElementById("original-button");

// This variable stores the "Mystery Color" button
const mysteryButton = document.getElementById("mystery-button");

// This random number function that will creates color codes for the randomColor variable
function randomNumber(num){
  return Math.floor(Math.random() * num)
}

// Write your code below
function colorChange(event){
  const randomColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
  //An event is just something that takes place in the browser.
  // Whether it's a click or scroll
  //We want the event to take place on a specific target
  // We put style because we want to change the style
  event.target.style.backgroundColor = randomColor;
}

//Here, we have an event that's already defined as onclick(it's a method), so we don't need to define . We
// just pass in the function, instead of calling it.
originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;
