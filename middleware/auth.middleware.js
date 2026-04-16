const jwt = require('jsonwebtoken');

const SECRET_KEY = "mi_clave_secreta_segura";

module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){
        return res.status(400).json({message: "Token requerido"});
    }
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }catch (error){
        return res.status(400).json({message: "Token invalido"});
    }
}