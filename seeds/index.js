const sequelize = require("../config/connection");
const chalk = require('../utils/chalk');
const log = console.log;
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedCategories = require("./categoryData");
const seedThreads = require("./threadData");

// Taking seed data files and combining the console log with Chalk and then running function to seed data for models
const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    log(chalk.red.bgBlue("\n ----------------------DATABASE SYNCED---------------------- \n"));

    await seedCategories();
    log(chalk.cyan.bgBlack("\n ----------------------CATEGORIES SEEDED---------------------- \n"));

    await seedUsers();
    log(chalk.blue.bgMagenta("\n ----------------------USERS SEEDED---------------------- \n"));

    await seedPosts();
    log(chalk.greenBright.bgBlack("\n ----------------------POSTS SEEDED---------------------- \n"));

    await seedThreads();
    log(chalk.yellow.bgRed("\n ----------------------THREADS SEEDED---------------------- \n"));

    process.exit(0);
  } catch (err) {
    log(chalk.black.underline.bgRed(err));
  }
};

seedAll();
