const db = require("../data/config")

function find() {
    return db("recipes")
}

function getShoppingList(id) {
    return db("recipes as r")
        .innerJoin("steps as s", "s.recipe_id", id)        
        .innerJoin("recipe_ingredients as ri", "ri.step", "s.step_number")
        .innerJoin("ingredients as i")
        .where("i.id", "ri.ingredient_id")
        .select("ri.quantity", "i.name")
}

// SELECT ri.quantity, i.name 
// FROM recipes as r
// INNER JOIN steps as s ON
// 	s.recipe_id = r.id
// INNER JOIN recipe_ingredients as ri ON
// 	ri.step = s.step_number
// INNER JOIN ingredients as i
// WHERE i.id = ri.ingredient_id

function getInstructions(id) {
    
}

module.exports = {
    find,
    getShoppingList,
    getInstructions,
}