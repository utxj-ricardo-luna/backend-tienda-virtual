const Sequelize  = require('sequelize');
const db = require('../models'); 
const carrito_detalle = db.tbc_carrito_detalle;

module.exports = {
    create(req, res){
        return carrito_detalle
            .create({
                nombre: req.body.nombre
            })
            .then(carrito_detalle => res.status(200).send(carrito_detalle))
            .catch(error => res.status(400).send(error))
    },
    list(_, res){
        return carrito_detalle.findAll({})
            .then(carrito_detalle => res.status(200).send(carrito_detalle))
            .catch(error => res.status(400).send(error))
    },
    find(req, res){
        return carrito_detalle.findAll({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(carrito_detalle => res.status(200).send(carrito_detalle))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res){
        return carrito_detalle.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).send({message:"carrito_detalle eliminada correctamente"}))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return carrito_detalle.update(
            {
                nombre: req.body.nombre
            },
            {   
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => res.status(200).send({message: "carrito_detalle actualizada correctamente"}))
        .catch(error => res.status(400).send(error))
    }
};