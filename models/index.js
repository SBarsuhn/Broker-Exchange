const User = require("./user");
const Post = require("./post");
const Categories = require("./categories");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasOne(Categories, {
  foreignKey: "category_id",
});

Categories.hasMany(Post, {
  foreignKey: "category_id",
});

module.exports = { User, Post, Categories };
