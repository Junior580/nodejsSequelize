const Sequelize = require("sequelize");
const dbconfig = require("../../database/index");

const User = dbconfig.define("User", {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
});

module.exports = User;
