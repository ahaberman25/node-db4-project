const express = require("express")
const Recipes = require("../models/recipes")

const router = express.Router()

router.get("/recipes", async (req, res, next) => {
    try {
        const recipes = await Recipes.find()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

router.get("/recipes/:id/shoppinglist", async (req, res, next) => {
    try {
        const recipes = await Recipes.getShoppingList(req.params.id)
        if (!recipes) {
            return res.status(404).json({
                message: "recipe not found",
            })
        }
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

module.exports = router