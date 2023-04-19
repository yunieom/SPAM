const { Schema } = require('mongoose');
const { Cart } = require('./models');

const cartItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const cartSchema = new Schema({
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, 
    },
    items: [cartItemSchema],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

const cart = new Cart({
  items: [
    {
      productId: '60f5f5e5a5a3a3c3b3f5d7c8',
      quantity: 2,
    },
    {
      productId: '60f5f5e5a5a3a3c3b3f5d7c9',
      quantity: 3,
    },
  ],
  totalPrice: 15000,
});

cart.save((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

module.exports = {cartSchema, cartItemSchema};