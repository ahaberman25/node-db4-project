
exports.seed = async function(knex) {
	await knex("recipe_ingredients").insert([   
		{ recipe_id: 1, ingredient_id: 1, quantity: "one cup" },
		{ recipe_id: 1, ingredient_id: 2, quantity: "1/2 cup" },
	])
}
