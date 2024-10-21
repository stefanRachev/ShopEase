const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      details: {
        weight: { type: Number },
        diameter: { type: Number },
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  customer: {
    // email: { type: String, required: true }, 
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["credit_card", "paypal", "cash_on_delivery"],
    },
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});


orderSchema.pre('save', function (next) {
  const order = this;
  let total = 0;

  
  order.items.forEach(item => {
    total += item.price * item.quantity;
  });

  order.totalAmount = total;
  next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;

