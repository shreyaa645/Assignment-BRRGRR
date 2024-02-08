// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 50,
  Cheese: 10,
  Tomatoes: 15,
  Onions: 25,
  Lettuce: 15,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  const pattyButton = document.querySelector(".btn-patty");
  const cheeseButton = document.querySelector(".btn-cheese");
  const tomatoesButton = document.querySelector(".btn-tomatoes");
  const onionsButton = document.querySelector(".btn-onions");
  const lettuceButton = document.querySelector(".btn-lettuce");

  pattyButton.classList.toggle("active", state.Patty);
  cheeseButton.classList.toggle("active", state.Cheese);
  tomatoesButton.classList.toggle("active", state.Tomatoes);
  onionsButton.classList.toggle("active", state.Onions);
  lettuceButton.classList.toggle("active", state.Lettuce);
}



//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  const xpatty = document.querySelector(".xpatty")
  
  if(state.Patty)
  {
    xpatty.innerHTML="Patty"
  }
  else
  {
    xpatty.innerHTML=""
  }

  const xcheese = document.querySelector(".xcheese")
  
  if(state.Cheese)
  {
    xcheese.innerHTML="Cheese"
  }
  else
  {
    xcheese.innerHTML=""
  }

  const xtomatoes = document.querySelector(".xtomatoes")
  
  if(state.Tomatoes)
  {
    xtomatoes.innerHTML="Tomatoes"
  }
  else
  {
    xtomatoes.innerHTML=""
  }

  const xonions = document.querySelector(".xonions")
  
  if(state.Onions)
  {
    xonions.innerHTML="Onions"
  }
  else
  {
    xonions.innerHTML=""
  }

  const xlettuce = document.querySelector(".xlettuce")
  
  if(state.Lettuce)
  {
    xlettuce.innerHTML="Lettuce"
  }
  else
  {
    xlettuce.innerHTML=""
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  var totalPrice = wholeWheatBun;

  for (const ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }

  const priceDetailsElement = document.querySelector(".price-details");
  priceDetailsElement.textContent = "Total INR: " + totalPrice;
}