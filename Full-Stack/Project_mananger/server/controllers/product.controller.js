//const express = require('express');
const product  = require('../models/product.model');
// const { request, response } = require('express');

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


module.exports.findProduct=(request,response)=>{
    product.find({})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.getProduct=(request,response)=>{
    product.findOne({_id:request.params.id})
        .then(product=>response.json(product))
        .catch(err=>response.json(err))
}


module.exports.updateProduct=(request,response) =>{
    product.findOneAndUpdate({_id:requset.params.id}, request.body, {new:true})
    .then(updateProduct=> response.json(updateProduct))
    .catch(err => response.json(err));
}