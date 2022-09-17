const express = require ('express');
const Container = require ('../2° Entrega/index');

const app = express();

const container = new Container ('product.txt');
const products = async() => {await container.getAll();}
console.log(products);

const appProducts = app.get ('/products', (req, res) => {
    res.send (`Our products are: ${products.then(prod => {prod})}`)
})
console.log(appProducts);


const PORT = process.env.port || 8080;

const server = app.listen(8080, (req, res) => {
    console.log(`El puerto ${PORT} esta corriendo OK`);
})
console.log(server);