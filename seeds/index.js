const sequelize = require("../config/connection");
// const chalk = require("chalk");
const chalk = require('../utils/chalk');
const log = console.log;
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedCategories = require("./categoryData");
const seedThreads = require("./threadData");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    log(chalk.red.bgBlue("\n DATABASE SYNCED \n"));

    await seedCategories();
    log(chalk.cyan.bgBlack("\n CATEGORIES SEEDED \n"));

    await seedUsers();
    log(chalk.blue.bgMagenta("\n USERS SEEDED \n"));

    await seedPosts();
    log(chalk.greenBright.bgBlack("\n POSTS SEEDED \n"));

    await seedThreads();
    log(chalk.yellow.bgRed("\n THREADS SEEDED \n"));

    process.exit(0);
  } catch (err) {
    log(chalk.black.bgRed(err));
  }
};

seedAll();
