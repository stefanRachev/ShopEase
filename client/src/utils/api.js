// src/utils/api.js

const apiUrl = import.meta.env.VITE_API_URL;


export const fetchAdminOrders = async () => {
  const token = localStorage.getItem("accessToken");
  return fetch(apiUrl + "/admin/orders", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};


export const deleteOrder = async (orderId) => {
  const token = localStorage.getItem("accessToken");
  return fetch(apiUrl + `/admin/orders/${orderId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const deleteUser = async (userId) => {
  return await fetch(apiUrl + `/admin/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};

export const fetchAdminUsers = async () => {
  return await fetch(apiUrl + "/admin/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
};