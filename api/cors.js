const corsAnywhere = require('cors-anywhere');

const corsServer = corsAnywhere.createServer({
    originWhitelist: [], // Permite todos los orígenes. Puedes especificar los permitidos aquí.
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
});

module.exports = (req, res) => {
    corsServer.emit('request', req, res);
};
