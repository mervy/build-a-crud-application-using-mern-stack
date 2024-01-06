const express = require('express');
const cors = require('cors');
const app =  express();
const DB_connect = require('./connect');

require('dotenv').config();

app.use(express.json());
app.use(cors());

//Importar as rotas
const phoneRoutes = require('./routes/phoneRoutes');
app.use('/', phoneRoutes);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}...`);
})


