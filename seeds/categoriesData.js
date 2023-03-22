const { Categories } = require("../models");

const categoriesData = [
{
    "categories": "Lost and Found"
},
{
    "categories": "Food"
},
{
    "categories": "Drinks/Water"
},
{
    "categories": "Baby Supplies"
},
{
    "categories": "Furniture"
},
{
    "categories": "Rides"
},
{
    "categories": "Planning"
},
{
    "categories": "Building"
},
{
    "categories": "Tutor"
},
{
    "categories": "Moving"
},
{
    "categories": "Babysit"
},
{
    "categories": "Housesit"
},
{
    "categories": "Walk Pets"
}
];

const seedCategories = () => Categories.bulkCreate(categoriesData);

module.exports = seedCategories;