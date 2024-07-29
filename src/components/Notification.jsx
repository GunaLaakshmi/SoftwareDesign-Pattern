// src/components/Notification.jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
  return <ToastContainer />;
};

export const showToast = (message, type = 'success') => {
  toast(message, { type });
};

export default Notification;
