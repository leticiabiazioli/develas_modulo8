const CarModel = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize")

class CarsController {
  async createCar(req, res) {
    if (!req.body.name || !req.body.brand || !req.body.color) {
      res.status(400).json('Dados não enviados');
    } else {
      const product = await CarModel.create({
        id: uuidv4(),
        name: req.body.name,
        brand: req.body.brand,
        color: req.body.color
      })
      res.status(200).json(product);
    }
  }

  getAllCars(req, res) {
    const { name } = req.query;
    const search = name ? {
      where: {
        name: { [Op.iLike]: `%${name}%` },
      }
    } : {};

    CarModel.findAll(search)
      .then(function (result) {
        res.status(200).json(result)
      })
      .catch(function (err) {
        res.status(500).json(err)
      })
  };

  async getCarById(req, res) {
    const product = await CarModel.findOne({ where: { id: req.params.id } });
    if (product === null) {
      res.status(500).json('Item não encontrado');
    } else {
      res.json(product)
    }
  }

  async updateCar(req, res) {
    const atualizarTotal = await CarModel.findOne({ where: { id: req.params.id } });
    if (atualizarTotal) {
      if (!req.body.name || !req.body.brand || !req.body.color) {
        res.status(500).json("Erro ao atualizar item, pois algum dos campos obrigatórios não foram informados.")
      } else {
        await CarModel.update({ name: req.body.name, brand: req.body.brand, color: req.body.color, updatedAt: Date.now() }, {
          where: {
            id: req.params.id
          }
        })
        res.status(200).send(`Item ${req.params.id} atualizado com sucesso.`);
      };

    } else { res.status(404).json("Erro ao atualizar item, pois item não existe.") }

  };

  async updateCarPartial(req, res) {
    const atualizarParcial = await CarModel.findOne({ where: { id: req.params.id } });
    if (atualizarParcial) {
      await CarModel.update({ name: req.body.name, brand: req.body.brand, color: req.body.color, updatedAt: Date.now() }, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).send(`Item ${req.params.id} atualizado com sucesso.`);
    } else { res.status(404).json("Erro ao atualizar item, pois item não existe.") }
  }

  async removeCar(req, res) {
    const deletar = await CarModel.findOne({ where: { id: req.params.id } });
    if (deletar) {
      await CarModel.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).send(`Item ${req.params.id} deletado com sucesso.`);
    } else { res.status(404).json("Erro ao deletar item, pois item não existe.") }
  }
}

module.exports = new CarsController();
