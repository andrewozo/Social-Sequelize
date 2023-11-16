const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

const Like = db.define("User", {
  reactionType: DataTypes.STRING,
  createdAt: DataTypes.STRING,
});

module.exports = Like;
