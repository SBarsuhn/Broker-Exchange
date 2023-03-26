const User = require("./user");
const Post = require("./post");
const Category = require("./category");
const Thread = require("./thread");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Thread, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Thread.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasOne(Category, {
  foreignKey: "post_id",
});

Category.hasMany(Post, {
  foreignKey: "post_id",
});

Post.hasMany(Thread, {
  foreignKey: 'post_id',
});

Thread.belongsTo(Post, {
  foreignKey: 'post_id',
});



module.exports = { User, Post, Category, Thread };
