"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
// Defining methods for the sightingsController
exports.default = {
    findAll: function (req, res) {
        models_1.default.Sighting.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
            return res.json(dbModel);
        })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        models_1.default.Sighting.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        models_1.default.Sighting.create(req.body)
            .then(dbModel => {
            return res.json(dbModel);
        })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        models_1.default.Sighting.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        models_1.default.Sighting.findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
//# sourceMappingURL=sightingsController.js.map