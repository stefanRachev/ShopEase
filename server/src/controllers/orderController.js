const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    const userId = req.user.id;

    const newOrder = new Order({
      user: userId,
      items,
      totalAmount,
    });

    await newOrder.save();

    // Намаляване на наличността на продуктите
    for (const item of items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity },
      });
    }

    res.status(201).json({
      status: "success",
      message: "Order created successfully!",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error creating order",
      error,
    });
  }
};

// Получаване на поръчки на потребителя
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
