'use strict';

function addIngredient(recipe,ingredient,amount){

		recipe[ingredient] = amount;
		return recipe; 
}

function removeIngredient(recipe,ingredient){
	delete recipe[ingredient];
	return recipe;
}

function updateIngredient(recipe,ingredient,amount) {
	recipe[ingredient] = amount;
 	return recipe;
}
			 


function readRecipe(recipe){
  for (var key in recipe) {
    console.log("this recipe calls for " + recipe[key] + " of " + key);
  }
}
// Create a function readRecipe 
// which accepts a recipe object 
// as a parameter. The function 
// should console.log a string of each
// ingredient and the amount "this 
// recipe calls for <amount> of <ingredient>"