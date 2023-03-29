const { User } = require("../models");

// Creating User seed data
const userData = [
  {
    first_name: "Molly",
    last_name: "HoneyBunchesOfOats",
    aliasName: "Cereal",
    email: "IdontHaveAnEmail@gmail.com",
    password: "password12345",
  },
  {
    first_name: "Ben",
    last_name: "Cheerios",
    aliasName: "BeeLikeMe",
    email: "BenCheerios@gmail.com",
    password: "password54",
  },
  {
    first_name: "Abby",
    last_name: "GoldenGrahams",
    aliasName: "Toasty",
    email: "AbbyGoldenGrahams@gmail.com",
    password: "password956",
  },
  {
    first_name: "Teddy",
    last_name: "LuckyCharms",
    aliasName: "Marshmellows",
    email: "TeddyLuckyCharms@comcast.com",
    password: "password12349",
  },
];
const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
