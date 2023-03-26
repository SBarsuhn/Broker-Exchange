const Category = require('../models/category');

const categoryData = [
{
    category: "Lost and Found"
},
{
    category: "Food"
},
{
    category: "Drinks/Water"
},
{
    category: "Baby Supplies"
},
{
    category: "Furniture"
},
{
    category: "Rides"
},
{
    category: "Planning"
},
{
    category: "Building"
},
{
    category: "Tutor"
},
{
    category: "Moving"
},
{
    category: "Babysit"
},
{
    category: "Housesit"
},
{
    category: "Walk Pets"
},
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;