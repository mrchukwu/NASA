const {getAllPlanets} = require("../../models/planets.model");


function httpGetAllPlanets(req, res) {
    // Logic to retrieve all planets
    return res.status(200).json(getAllPlanets());
};

module.exports = {
    httpGetAllPlanets
};