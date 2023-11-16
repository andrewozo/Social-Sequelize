const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

const Comment = db.define("User", {
  body: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Comment;
