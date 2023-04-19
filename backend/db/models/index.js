const mongoose = require('mongoose');
const { cartSchema, cartItemSchema } = require('./schemas');


exports.Cart = mongoose.model('Cart', cartSchema);
exports.CartItem = mongoose.model('CartItem', cartItemSchema);