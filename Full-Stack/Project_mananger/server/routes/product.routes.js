const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/getProduct',ProductController.findProduct);
    app.get('/api/get/:id',ProductController.getProduct);
    app.put('/api/edit/:id',ProductController.updateProduct);

}
