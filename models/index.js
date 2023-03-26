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
  foreignKey: "user_id",
});

// Category.hasMany(Post, {
//   foreignKey: "user_id",
// });

// Post.hasMany(Thread, {
//   foreignKey: 'user_id',
// });

// Thread.belongsTo(Post, {
//   foreignKey: 'user_id',
// });



module.exports = { User, Post, Category, Thread };
