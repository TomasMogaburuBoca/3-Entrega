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