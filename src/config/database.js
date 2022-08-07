require("dotenv").config();

module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true,
    },
};
