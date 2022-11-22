const { Sequelize } = require("sequelize");
const { HOST_DB, PORT_DB, USER_DB, PASS_DB, DATABASE } = require("dotenv").config().parsed;

const sequelize = new Sequelize({
    dialect: "postgres",
    database: DATABASE,
    host: HOST_DB,
    username: USER_DB,
    password: PASS_DB,
    port: PORT_DB,
    define: { timestamps: false }
})

sequelize
    .authenticate()
    .then(() => { console.log("Conectado com sucesso!") })
    .catch((err) => { console.error("Conectado com erro:", err) })

module.exports = sequelize;