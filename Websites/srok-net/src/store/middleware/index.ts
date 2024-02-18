import { Middleware } from "@reduxjs/toolkit";
import { Manager, Socket } from "socket.io-client";

// const HOST = ConnectionInstance.HOST;

const initialization = (socket: Socket) => {
  socket.on("connect", () => {
    console.log("Connection established :)");
  });
  socket.on("connect_error", () => {
    console.log("Socket disconnected!");
  });
};

const manager = new Manager();
const socket = manager.socket("/");
initialization(socket);

export const socketMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      default:
        return next(action);
    }
  };
