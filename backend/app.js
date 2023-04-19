const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const cartsRouter = require('./routes/carts.js');
const indexRouter = require('./routes');


//const postsRouter = require('./routes/cart');

mongoose.connect('mongodb+srv://h0onnn:holo1234@holo-cluster.3zn6epn.mongodb.net/test');

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// error handler
app.use('/', indexRouter);
app.use('/cart', cartsRouter);

app.listen(3000);