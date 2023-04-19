const { Router } = require('express');
const { Cart } = require('../models');
const { CartItem } = require('../models');

const router = Router();


router.get('/', async (req, res) => {
    try {
      const carts = await Cart.find().populate('cartItem.product');
      res.json(carts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });