const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Middleware de CORS
app.use(cors());

// Proxy
app.use('/submit', createProxyMiddleware({ 
    target: 'https://api.web3forms.com', 
    changeOrigin: true,
    followRedirects: true
}));

app.listen(3000, () => {
  console.log('Servidor proxy escuchando en el puerto 3000');
});
