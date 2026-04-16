const usuarioController = require('../controllers/controller_usuario');
const authMiddleware = require('../middleware/auth.middleware');

module.exports = (app) => {
        app.get('/api/usuarios', usuarioController.list);
        app.get('/api/usuario/:nombre', usuarioController.find);
        app.post('/api/usuario/', usuarioController.create);
        app.put('/api/usuario/:id', usuarioController.update);
        app.delete('/api/usuario/:id', usuarioController.delete);
        app.post('/api/login', usuarioController.login);
        app.get('/api/perfil', authMiddleware, usuarioController.perfil);
};