const ProductModel = require('../models/productModel');
const productModel = new ProductModel();

class ProductService{
    constructor() {
    }
  
    async getProducts(page) { 
        let products = [];
        const totalProducts = await productModel.getTotalProducts();
        const pageSize = 100;
        const totalPages = Math.ceil(totalProducts / pageSize);
        const offset = (page - 1) * pageSize;
        if (page < 1 || page > totalPages) { throw new Error('Página não Encontrada.'); }
        products = await productModel.getProducts(offset, 100);
        return products;
    }

    async getProductbyCode(code) { 
        const product = await productModel.getProductByCode(code);
        if(product.length == 0) { throw new Error('Produto Não Encontrado.'); }
        return product;
    }

    async deleteProductByCode(code) { 
        const product_delete = await productModel.deleteProductByCode(code);
        console.log("produc",product_delete);
        if(!product_delete) { throw new Error('Produto Não Encontrado.'); }
        return product_delete;
    }

    async updateProductByCode(name,code) { 
        const product_update = await productModel.updateProductByCode(name,code);
        if(!product_update) { throw new Error('Produto Não Encontrado.'); }
        return product_update;
    }
}
  
module.exports = ProductService;
