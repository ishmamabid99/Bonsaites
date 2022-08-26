const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http://localhost:9000',
    changeOrigin: true
}
module.exports = function (app) {
    app.use(
        '/bank',
        createProxyMiddleware(proxy)
    );
}