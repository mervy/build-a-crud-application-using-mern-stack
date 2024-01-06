const mongoose = require('mongoose');

const DB = 'mongodb+srv://webdesigner:6ZUgawkZmnq4y7pz@cluster0.mipivh9.mongodb.net/db-mern-stack?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected ...')
})

module.exports = DB;