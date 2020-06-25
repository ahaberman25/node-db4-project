
exports.seed = async function(knex) {
	await knex("steps").insert([   
		{ step_number: 1.1, recipe_id: 1, description: "This is step 1, recipe 1" },
    { step_number: 1.2, recipe_id: 1, description: "This is step 2, recipe 1" },
    { step_number: 2.1, recipe_id: 2, description: "This is step 1, recipe 2" },
		{ step_number: 2.2, recipe_id: 2, description: "This is step 2, recipe 2" },
	])
}