const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

const Post = db.define("User", {
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Post;
