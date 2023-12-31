import io from "socket.io-client";
import { chatMessageHandler } from "../store/actions/messengerActions";
import {
  onlineUsersHandler,
  userDisconnectedHandler,
} from "../store/actions/usersActions";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log("connected to socket server");
  });

  socket.on("online-users", (usersData) => {
    onlineUsersHandler(socket.id, usersData);
  });

  socket.on("chat-message", (messageData) => {
    chatMessageHandler(messageData);
  });

  socket.on("user-disconnected", (disconnectedUserSocketId) => {
    userDisconnectedHandler(disconnectedUserSocketId);
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};

export const sendChatMessage = (data) => {
  socket.emit("chat-message", data);
};
