
exports.seed = async function(knex) {
	await knex("steps").insert([   
		{ step_number: 1, recipe_id: 1 },
		{ step_number: 2, recipe_id: 1 },
	])
}