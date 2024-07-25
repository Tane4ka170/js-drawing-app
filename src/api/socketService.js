import { io } from "socket.io-client";

const socket = io("https://bsp-mini-chat-backend.onrender.com");

export const sendMessage = (message) => {
  socket.emit("message", message);
};

export const onMessageReceived = (callback) => {
  socket.on("message", callback);
};

export const connect = () => {
  socket.connect();
};

export const disconnect = () => {
  socket.disconnect();
};
