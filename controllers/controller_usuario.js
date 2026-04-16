const jwt = require('jsonwebtoken');
const Sequelize  = require('sequelize');
const db = require('../models'); 
const usuario = db.tbc_usuario;

const SECRET_KEY = "mi_clave_secreta_segura";

module.exports = {
    create(req, res){
        return usuario
            .create({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
                password: req.body.password,
                rol: req.body.rol,
                fecha_registro: req.body.fecha_registro
            })
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
    list(_, res){
        return usuario.findAll({})
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
    find(req, res){
        return usuario.findAll({
            where: {
                nombre: req.params.nombre,
            }
        })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res){
        return usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).send({message:"usuario eliminada correctamente"}))
        .catch(error => res.status(400).send(error))
    },
    update(req, res){
        return usuario.update(
            {
                nombre: req.body.nombre
            },
            {   
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => res.status(200).send({message: "usuario actualizada correctamente"}))
        .catch(error => res.status(400).send(error))
    },
    async login(req, res) {
        const { email, password } = req.body;

        const user = await usuario.findOne({ where: { email: email } });

        if (!user) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            }, 
            SECRET_KEY, 
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login exitoso",
            token
        });
    },
    perfil(req,res){
        res.json({
            message:"Acceso permitido",
            user: req.user
        })
    }

};