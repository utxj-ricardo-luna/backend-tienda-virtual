const usuarioController = require('../controllers/controller_usuario');

module.exports = (app) => {
        app.get('/api/usuarios', usuarioController.list);
        app.get('/api/usuario/:nombre', usuarioController.find);
        app.post('/api/usuario/', usuarioController.create);
        app.put('/api/usuario/:id', usuarioController.update);
        app.delete('/api/usuario/:id', usuarioController.delete);
};