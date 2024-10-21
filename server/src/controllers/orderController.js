const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
 
  try {
    const { items, customer,totalAmount } = req.body; 
    const userId = req.user.id; 

    
    const newOrder = new Order({
      user: userId, 
      items, 
      customer, 
      totalAmount, 
    });

    
    await newOrder.save();

    res.status(201).json({
      status: "success",
      message: "Order created successfully!",
      order: newOrder, 
    });
  } catch (error) {
    console.error("Error creating order:", error); 
    res.status(500).json({
      status: "error",
      message: "Error creating order",
      error: error.message, 
    });
  }
};



exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId });

    res.status(200).json({
      status: "success",
      orders,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving orders",
      error,
    });
  }
};
