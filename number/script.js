const randomNumberElement = document.getElementById('random-number');

function displayRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1; 
  randomNumberElement.textContent = randomNumber;
}

setInterval(displayRandomNumber, 5000);

displayRandomNumber();
