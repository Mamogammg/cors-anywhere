const corsAnywhere = require('cors-anywhere');

const corsServer = corsAnywhere.createServer({
    originWhitelist: [], // Permite todos los orígenes. Puedes especificar los permitidos aquí.
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    setHeaders: { // Agrega los encabezados CORS
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
});

module.exports = (req, res) => {
    // Redirigir el tráfico al proxy
    corsServer.emit('request', req, res);
};
