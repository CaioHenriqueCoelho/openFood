class ProductModel {
  constructor() {
      // Inicialização do modelo, como conexão com o banco de dados
      this.db = require('../db');
  }

    getProducts(startIndex, pageSize) {
        return new Promise((resolve, reject) => {
        this.db.query('SELECT * FROM product LIMIT ?, ?', [startIndex, pageSize], (error, results) => {
                if (error) {
                    resolve(error);
                }
                if (!results || results.length === 0) {
                    return;
                }
                resolve(results);
            });
        });
    }

    getTotalProducts() {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT COUNT(*) AS total FROM product', (error, results) => {
                if (error) {
                    console.error('Erro ao obter o total de produtos:', error);
                    reject(error);
                    return;
                }
                resolve(results[0].total);
            });
        });
    }

    getProductByCode(code) {
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM product WHERE code = ?', [code], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }

    deleteProductByCode(code) {
        return new Promise((resolve, reject) => {
            this.db.query('UPDATE product set status = "deleted" WHERE code = ?', [code], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                if(results.affectedRows == 0){
                    resolve(false);
                }
                resolve(results);
            });
        });
    }
    updateProductByCode(name,code) {
        return new Promise((resolve, reject) => {
            this.db.query('UPDATE product set product_name = ? WHERE code = ?', [name ,code], (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                if(results.affectedRows == 0){
                    resolve(false);
                }
                resolve(results);
            });
        });
    }
}

module.exports = ProductModel;
