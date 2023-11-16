const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

const User = db.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;
