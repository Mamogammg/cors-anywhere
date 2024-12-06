const corsAnywhere = require('cors-anywhere');

const corsServer = corsAnywhere.createServer({
  originWhitelist: [],  // Permitir todas las solicitudes. O puedes añadir dominios específicos aquí.
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
});

// Incluir los encabezados CORS en la respuesta
module.exports = (req, res) => {
  // Agregar los encabezados CORS antes de manejar la solicitud
  res.setHeader('Access-Control-Allow-Origin', '*');  // Permitir todas las solicitudes de origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  corsServer.emit('request', req, res);
};
