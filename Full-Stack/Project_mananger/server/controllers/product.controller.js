const { product } = require('../models/product.model');
const { request, response } = require('express');

module.exports.createProduct = (request, response) => {
    const { title, price,desc } = request.body;
    product.create({
        title,
        price,
        desc
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}