import { RouterProvider } from "react-router-dom";

import { appRouter } from "../model/appRouter";

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};
