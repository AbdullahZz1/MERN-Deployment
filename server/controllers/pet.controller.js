const { Pet } = require('../models/pet.model');

module.exports.createPet = (request, response) => {
    const { name, type, description } = request.body;
    Pet.create(request.body)
        .then(newPet => response.json(newPet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPet = (request, response) => {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatePet => response.json(updatePet))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({ _id: request.params.id })
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}