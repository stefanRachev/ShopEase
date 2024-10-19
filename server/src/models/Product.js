const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1, // Може да зададеш и по подразбиране колко от продукта имаш
  },
  stock: {
    type: Number,
    required: true,
    default: 0, // Броя на налични стоки
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  details: {
    fullDescription: {
      type: String,
    },
    additionalInfo: {
      type: String,
    },
    weight: {
      type: Number, 
    },
    diameter: {
      type: Number, 
    },
    images: {
      type: [String], 
    },
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

