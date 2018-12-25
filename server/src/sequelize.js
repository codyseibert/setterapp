const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "root", "123456", {
  host: "localhost",
  dialect: process.env.NODE_ENV === "production" ? "postgres" : "sqlite",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: "./database.sqlite"
});
module.exports = sequelize;
