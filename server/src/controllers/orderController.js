const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  console.log("Request body:", req.body); // Логваме тялото на заявката
  try {
    const { items, customer,totalAmount } = req.body; // Вземаме items и customer от тялото на заявката
    const userId = req.user.id; // Вземаме ID-то на потребителя от токена

    // Създаване на нова поръчка
    const newOrder = new Order({
      user: userId, // Добавяме user ID
      items, // Вземаме items от заявката
      customer, // Вземаме customer от заявката
      totalAmount, // Задаваме общата сума на поръчката
    });

    // Съхраняваме поръчката в базата данни
    await newOrder.save();

    res.status(201).json({
      status: "success",
      message: "Order created successfully!",
      order: newOrder, // Връщаме новосъздадената поръчка
    });
  } catch (error) {
    console.error("Error creating order:", error); // Логваме грешката
    res.status(500).json({
      status: "error",
      message: "Error creating order",
      error: error.message, // Връщаме детайлите на грешката
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
