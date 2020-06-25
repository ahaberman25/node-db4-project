
exports.seed = async function(knex) {
	await knex("recipe_ingredients").insert([   
		{ step: 1.1, ingredient_id: 1, quantity: "one cup" },
    { step: 1.2, ingredient_id: 2, quantity: "1/2 cup" },
    { step: 2.1, ingredient_id: 1, quantity: "one cup" },
		{ step: 2.2, ingredient_id: 2, quantity: "1/2 cup" },
	])
}
