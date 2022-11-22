const { DataTypes } = require("sequelize");
const sequelize = require("../infra/dbSequelize");

const CarModel = sequelize.define("CarModel", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
},
    {
        tableName: "Cars",
        schema: "public"
    });

module.exports = CarModel;