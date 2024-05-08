const searchBtn = document.getElementById("search-btn");
const inputString = document.getElementById("drink-search");

// Items
let drinkName = document.getElementById("drink-name");
let drinkInstr = document.getElementById("drink-instr");

const fetchDrinks = async (input) => {
  let html = "";
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
  );
  const data = await response.json();
  console.log(
    data.drinks.forEach((element) => {
      if (element.strAlcoholic !== "Alcoholic") {
        html += `
        <div class="drink"> 
          <img src="${element.strDrinkThumb}" height="300" width="300" alt="drink">
          <h2>${element.strDrink}</h2>
          <h3>Instructions</h3>
          <p>${element.strInstructions}</p>
          <h3>Ingredients</h3>
        </div>`;

        document.querySelector("#drinks").innerHTML = html;
      }
    })
  );
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = inputString.value;
  fetchDrinks(userInput);
  inputString.value = "";
});

// Pre-Loaded Drinks
fetchDrinks("smoothie");
