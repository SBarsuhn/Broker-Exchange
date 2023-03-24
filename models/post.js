const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    offer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Need: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    closed_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    post_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    thread_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'thread',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;