const sequelize = require("../config/connection");

const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedCategories = require("./categoriesData");

const seedAll = async ()=>{
    await sequelize.sync({force: true});
    console.log("\n DATABASE SYNCED \n");

    await seedUsers();
    console.log("\n USERS SEEDED \n");

    await seedPosts();
    console.log("\n POSTS SEEDED \n");

    await seedCategories
    console.log("\n CATEGORIES SEEDED \n");

    process.exit(0);
};

seedAll();