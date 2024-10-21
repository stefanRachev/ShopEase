// src/utils/payment.js
const apiUrl = import.meta.env.VITE_API_URL;

export const processMockPayment = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment processed for:", formData);
      resolve("Payment successful! (Simulated)");
    }, 1000);
  });
};

export const validateForm = (formData) => {
  const { name, address, paymentMethod, cardNumber, expirationDate, cvv } =
    formData;

  if (!name.trim()) {
    return { valid: false, message: "Name is required." };
  }

  if (!address.trim()) {
    return { valid: false, message: "Address is required." };
  }

  if (!paymentMethod) {
    return { valid: false, message: "Payment method is required." };
  }

  if (paymentMethod === "creditCard") {
    if (!cardNumber.trim()) {
      return { valid: false, message: "Card number is required." };
    }
    if (!expirationDate.trim()) {
      return { valid: false, message: "Expiration date is required." };
    }
    if (!cvv.trim()) {
      return { valid: false, message: "CVV is required." };
    }
  }

  return { valid: true, message: "" };
};

// export const createOrderData = (formData, cartItems, totalAmount) => {
//   return {
//     items: cartItems.map(item => ({
//       productId: item.id,
//       quantity: item.quantity,
//       price: item.price,
//     })),
//     totalAmount: totalAmount,
//     customer: {
//       name: formData.name,
//       address: formData.address,
//       phone: formData.phone,
//       paymentMethod: formData.paymentMethod,
//       // cardNumber: formData.cardNumber,
//       // expirationDate: formData.expirationDate,
//       // cvv: formData.cvv,
//     },
//   };
// };

export const createOrderData = (formData, cartItems,totalAmount) => {
  return {
    items: cartItems.map((item) => ({
      name: item.name, 
      image: item.image,
      price: item.price, 
      quantity: item.quantity,
      description: item.description,
      details: item.details, 
    })),
    totalAmount: totalAmount,
    customer: {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      paymentMethod: formData.paymentMethod,

      cardNumber: formData.cardNumber,
      expirationDate: formData.expirationDate,
      cvv: formData.cvv,
    },
  };
};

export const submitOrder = async (orderData) => {
  try {
    const response = await fetch(apiUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create order");
    }

    return data;
  } catch (error) {
    throw new Error("Order submission error: " + error.message);
  }
};
