const { inicializarCron } = require('./cronJob');
inicializarCron();
const express = require('express');
const productRoutes = require('./routes/productsRoutes');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerConfig'); 
const errorMiddleware = require('./middleware/error-middleware');

const app = express();

app.use(errorMiddleware);


app.use(express.json());
app.use('/', productRoutes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {

});

module.exports = app;