class ProductValidate {
    constructor() {
    }
  
    async validateCode(code) { 
        if (isNaN(code)) {
            throw new Error('code deve ser um númerico.');
        } else {
            return true;
        }
    }
    async validateJson(json) { 
        if (!json.product_name) {
            throw new Error('Json inválido');
        } else {
            return true;
        }
    }
}
  
module.exports = ProductValidate;
