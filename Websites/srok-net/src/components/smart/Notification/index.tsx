import React, { FC } from "react";
import { ToastContainer, ToastTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

type NotificationTheme = "light" | "dark" | "colored";
type NotificationState = "success" | "error";

interface INotificationProps {
  position?: NotificationPosition;
  autoClose?: number;
  hideProgressBar?: boolean;
  newestOnTop?: boolean;
  closeOnClick?: boolean;
  rtl?: boolean;
  pauseOnFocusLoss?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
  theme?: NotificationTheme;
  transition?: ToastTransition;
  message?: string;
  state?: NotificationState;
}

const Notification: FC<INotificationProps> = (props) => {
  // const {
  //   position = "top-center",
  //   autoClose = 2000,
  //   hideProgressBar = false,
  //   newestOnTop = false,
  //   closeOnClick = true,
  //   rtl = false,
  //   pauseOnFocusLoss = false,
  //   draggable = false,
  //   pauseOnHover = false,
  //   theme = "light",
  //   transition,
  // } = props;

  return <ToastContainer />;
};

export default Notification;
