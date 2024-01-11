const symbols = {
    "money" : "$",
    "credits" : "Ξ",
    "stone" : "∅",
    "iron" : "⋒",
    "silver" : "〥",
    "gold" : "♀",
    "titanium" : "∐",
    "oil" : "♨",
    "technology" : "〄",
    "moon_cheese" : "∆",
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
    "silver" : 2.5,
    "gold" : 5,
    "titanium" : 10,
    "oil" : 0,
    "technology" : 0,
    "moon_cheese" : 20,
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
    "moon_cheese" : 45,
    "moon_cheese_fuel" : 50
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