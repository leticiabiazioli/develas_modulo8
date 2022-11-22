const { Router } = require("express");
const router = Router();
const CarsController = require("../controllers/carsController");

router.post("/", CarsController.createCar);

router.get("/", CarsController.getAllCars);

router.get("/:id", CarsController.getCarById);

router.put("/:id", CarsController.updateCar);

router.patch("/:id", CarsController.updateCarPartial);

router.delete("/:id", CarsController.removeCar);

module.exports = router;