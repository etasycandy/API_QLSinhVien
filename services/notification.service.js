const { Notification } = require("../models");

const createNotification = async (body) => {
  return await Notification.create(body);
};

const getNotifications = async () => {
  return Notification.find();
};

const getNotificationById = async (id) => {
  return Notification.findById(id);
};

const updateNotificationById = async (id, body) => {
  const result = await Notification.findByIdAndUpdate(id, body);
  return result;
};

const deleteNotificationById = async (id) => {
  const result = await Notification.findByIdAndDelete(id);
  return result;
};

const paginate = async (size) => {
  const result = await Notification.find().sort({ createdAt: 1 }).limit(size);
  return result;
};

module.exports = {
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,
  paginate,
};
