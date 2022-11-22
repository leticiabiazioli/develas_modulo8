'use strict';

const {v4} = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cars', [
      {
        id: v4(),
        name: "Gol",
        brand: "Volkswagen",
        color: "preto",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        name: "Sandero",
        brand: "Renault",
        color: "branco",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        name: "Onix",
        brand: "Chevrolet",
        color: "azul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        name: "Punto",
        brand: "Fiat",
        color: "vermelho",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carros', null, {});
  }
};
