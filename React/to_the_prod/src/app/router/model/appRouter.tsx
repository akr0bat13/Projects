import { createBrowserRouter } from "react-router";
import { ErrorPage } from "../ui/ErrorPage";

import { UsersPage } from "../../../pages/UsersPage";
import { AppLayout } from "../../../widgets/AppLayout";
import { HelloPage } from "../../../pages/HelloPage";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HelloPage />
      },
      {
        path: '/users',
        element: <UsersPage />
      }
    ]
  }
])