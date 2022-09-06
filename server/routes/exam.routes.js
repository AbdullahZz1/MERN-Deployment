
const PetController = require("../controllers/pet.controller")
module.exports = function (app) {
    app.get('/', PetController.getAllPet);
    app.get("/pet/:id", PetController.getPet)
    app.post('/pets/new', PetController.createPet);
    app.put('/pets/:id/edit', PetController.updatePet);
    app.delete('/delete/:id', PetController.deletePet)
}

