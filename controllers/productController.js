const ProductValidate = require('../middleware/productValidate');
const ProductService = require('../services/productService');
const productValidate = new ProductValidate();
const productService = new ProductService();

class ProductController {
  async getAllProducts(req, res) {
    try {
      if(req.query.page == undefined) { req.query.page = 1 }
      const page = await productValidate.validateCode(req.query.page);
      const products = await productService.getProducts(parseInt(req.query.page));
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getProductByCode(req, res) {
    try {
      await productValidate.validateCode(req.params.code);
      const productByCode = await productService.getProductbyCode(parseInt(req.params.code));
      res.json(productByCode);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteProductByCode(req, res) {
    try {
      await productValidate.validateCode(req.params.code);
      const prod_delete = await productService.deleteProductByCode(parseInt(req.params.code));
      res.json({ produto: req.params.code, message: 'Produto deletado com Sucesso!' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateProductByCode(req, res) {
    try {
      await productValidate.validateCode(req.params.code);
      await productValidate.validateJson(req.body);
      const prod_update = await productService.updateProductByCode(req.body.product_name,parseInt(req.params.code));
      res.json({ produto: req.params.code, message: 'Produto Atualizado com Sucesso!' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = ProductController;
