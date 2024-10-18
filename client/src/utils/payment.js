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
  const { name, address, cardNumber, expirationDate, cvv } = formData;
  if (!name || !address || !cardNumber || !expirationDate || !cvv) {
    return false;
  }
  return true;
};
