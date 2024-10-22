const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { items, customer, totalAmount } = req.body;
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
      orderId: newOrder._id,
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


exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id; 
     
    const order = await Order.findById(orderId).populate("user", "email");;
 
    if (!order) {
      return res.status(404).json({
        status: "error",
        message: "Order not found",
      });
    }

    res.status(200).json({
      status: "success",
      order: {
        ...order.toObject(), // Преобразува поръчката в обикновен обект
        userEmail: order.user.email, // Добавя имейла в отговора
      },
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({
      status: "error",
      message: "Error fetching order",
      error: error.message,
    });
  }
};

