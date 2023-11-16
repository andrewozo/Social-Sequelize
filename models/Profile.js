const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

const Profile = db.define("User", {
  bio: DataTypes.STRING,
  profilePicture: DataTypes.STRING,
  birthday: DataTypes.STRING,
});

module.exports = Profile;
