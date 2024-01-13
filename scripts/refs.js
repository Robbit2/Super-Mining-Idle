class Recipe {
    constructor({name, level, inputs, outputs, symbol}){
        this.name = name;
        this.level = level;
        this.inputs = inputs;
        this.outputs = outputs;
        this.symbol = symbol;
    }
}

const symbols = {
    "money" : "$",
    "credits" : "Ξ",
    "stone" : "∅",
    "iron" : "⋒",
    "iron_bar" : "⋒",
    "silver" : "〥",
    "silver_bar" : "〥",
    "gold" : "♀",
    "gold_bar" : "♀",
    "titanium" : "∐",
    "titanium_bar" : "∐",
    "oil" : "♨",
    "technology" : "〄",
    "moon_cheese" : "∆",
    "moon_cheese_bar" : "∆",
    "moon_cheese_fuel" : "⊵"
};

const names = {
    "stone" : "Stone",
    "iron" : "Iron",
    "iron_bar" : "Iron Bar",
    "silver" : "Silver",
    "silver_bar" : "Silver Bar",
    "gold" : "Gold",
    "gold_bar" : "Gold Bar",
    "titanium" : "Titanium",
    "titanium_bar" : "Titanium Bar",
    "oil" : "Oil",
    "technology" : "Technology",
    "moon_cheese" : "Moon Cheese",
    "moon_cheese_bar" : "Moon Cheese Bar",
    "moon_cheese_fuel" : "Moon Cheese Fuel"
};

const mineTimes = {
    "stone" : .5,
    "iron" : 1,
    "silver" : 2,
    "gold" : 4,
    "titanium" : 7,
    "oil" : 0,
    "technology" : 0,
    "moon_cheese" : 10,
    "moon_cheese_fuel" : 0
};

const expValues = {
    "stone" : 5,
    "iron" : 7.5,
    "silver" : 10,
    "gold" : 20,
    "titanium" : 30,
    "oil" : 15,
    "technology" : 25,
    "moon_cheese" : 250,
    "moon_cheese_fuel" : 500
}

const smelteryRecipes = {
    "stone" : null,
    "iron" : "iron_bar",
    "silver" : "silver_bar",
    "gold" : "gold_bar",
    "titanium" : "titanium_bar",
    "oil" : null,
    "technology" : null,
    "moon_cheese" : "moon_cheese_bar",
    "moon_cheese_fuel" : null
};

const recipes = {
    "refined_iron" : new Recipe({"name" : "Refined Iron","inputs" : {"iron_bar" : 2},"outputs" : {"refined_iron" : 1},"level" : 5, "symbol": "⋒"}),
    "refined_silver" : new Recipe({"name" : "Refined Silver","inputs" : {"silver_bar" : 2},"outputs" : {"refined_silver" : 1},"level" : 5, "symbol": "〥"}),
    "refined_gold" : new Recipe({"name" : "Refined Gold","inputs" : {"gold_bar" : 2},"outputs" : {"refined_gold" : 1},"level" : 6, "symbol": "♀"})
}