const sequelize = require("../config/connection");

const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedCategories = require("./categoryData");
const seedThreads = require("./threadData");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n DATABASE SYNCED \n");

    await seedCategories();
    console.log("\n CATEGORIES SEEDED \n");

    await seedUsers();
    console.log("\n USERS SEEDED \n");
    
    await seedPosts();
    console.log("\n POSTS SEEDED \n");

    await seedThreads();
    console.log("\n THREADS SEEDED \n");

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedAll();
