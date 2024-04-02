import { Middleware } from "@reduxjs/toolkit";
import { Manager, Socket } from "socket.io-client";

import { ConnectionInstance } from "src/utils/constants/connection";

const HOST = ConnectionInstance.HOST;

console.log("WSHOST", HOST);

const initialization = (socket: Socket) => {
  socket.on("connect", () => {
    console.log("Connection established :)");
  });
  socket.on("connect_error", () => {
    console.log("Socket disconnected!");
  });
};

const manager = new Manager(HOST, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: Infinity,
});
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
