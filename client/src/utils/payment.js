// src/utils/payment.js

export const processMockPayment = (formData) => {
 
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment processed for:", formData);
      resolve("Payment successful! (Simulated)");
    }, 1000);
  });
};

export const validateForm = (formData) => {
  const { name, address, paymentMethod, cardNumber, expirationDate, cvv } = formData;

  
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
