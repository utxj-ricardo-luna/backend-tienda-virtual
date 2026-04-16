const Sequelize  = require('sequelize');
const db = require('../models'); 
const carrito = db.tbc_carrito;

module.exports = {
    create(req, res){
        return carrito
            .create({
                nombre: req.body.nombre
            })
            .then(carrito => res.status(200).send(carrito))
            .catch(error => res.status(400).send(error))
    },
    list(_, res){
        return carrito.findAll({})
            .then(carrito => res.status(200).send(carrito))
            .catch(error => res.status(400).send(error))
    },
    find(req, res){
        return carrito.findAll({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(carrito => res.status(200).send(carrito))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res){
        return carrito.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).send({message:"carrito eliminada correctamente"}))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return carrito.update(
            {
                nombre: req.body.nombre
            },
            {   
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => res.status(200).send({message: "carrito actualizada correctamente"}))
        .catch(error => res.status(400).send(error))
    }
};