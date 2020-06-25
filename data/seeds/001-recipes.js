
exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ name: "Yellow Cake", description: "A fluffy yellow cake with a decident white frosting" },
		{ name: "Chocolate Cake", description: "A fluffy chocolate cake with a chocolate frosting on top" },
	])
}
