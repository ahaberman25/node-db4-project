
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", tbl => {
        tbl.increments("id")
        tbl.text("name").notNull().unique()
        tbl.text("description").notNull()
    })
    await knex.schema.createTable("ingredients", tbl => {
        tbl.increments("id")
        tbl.text("name").notNull().unique()
    })
    await knex.schema.createTable("steps", tbl => {
        tbl.increments("id")
        tbl.integer("step_number").notNull()
        tbl
            .integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
    await knex.schema.createTable("recipe_ingredients", tbl => {
        tbl
            .integer("recipe_id")
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        tbl 
            .integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        tbl.float("quantity")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
