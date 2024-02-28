const request = require('supertest');
const app = require('../index');

describe('Testes de Rotas de Status', () => {
    it('Deve retornar todos os status', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    })

    it('Deve retornar todos os produtos com uma chave de API válida', async () => {
        const response = await request(app)
            .get('/products')
            .set('x-api-key', 'abc123');
        expect(response.status).toBe(200);
    });

    it('Deve retornar todos o produto pelo code com uma chave de API válida', async () => {
        const response = await request(app)
            .get('/products/0000000000031')
            .set('x-api-key', 'abc123');
        expect(response.status).toBe(200);
    });

    it('Deve alterar o status de um produto pelo code com uma chave de API válida', async () => {
        const response = await request(app)
            .delete('/products/0000000000031')
            .set('x-api-key', 'abc123');
        expect(response.status).toBe(200);
    });

    it('Deve alterar informações do produto pelo code com uma chave de API válida', async () => {
        const info = {
            name_product: 'new_name'
        };
        const response = await request(app)
            .delete('/products/0000000000031')
            .set('x-api-key', 'abc123')
            .send(info);
        expect(response.status).toBe(200);
    });
});




