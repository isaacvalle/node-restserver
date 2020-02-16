const jwt = require("jsonwebtoken");
//==========================
//Verificacion del token
//==========================
let verificaToken = (req, res, next) => {
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: 'Token no válido'
        }
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

//==========================
//Verificacion del token
//==========================
let verificaAdminRole = (req, res, next) => {
  let usuario = req.usuario.role;

  if (usuario === 'ADMIN_ROLE') {
    next();
  } else {
    return res.status(400).json({
      ok: false,
        err: {
          message: 'No tienes los permisos para esta accion'
        }
    });
  }
};

module.exports = { 
  verificaToken,
  verificaAdminRole
};