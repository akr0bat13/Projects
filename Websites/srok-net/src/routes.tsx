import React, { FC, lazy, Suspense } from "react";
import { RouteObject } from "react-router";

import LoadingScreen from "./components/smart/LoadingScreen";
import AboutUs from "./pages/AboutUs";
import Calculation from "./pages/Calculation";
import ContactUs from "./pages/ContactUs";
import Explanations from "./pages/Explanations";
import ForLoyers from "./pages/ForLoyers";
import MainPage from "./pages/MainPage";
import OnFreedom from "./pages/OnFreedom/OnFreedom";
import Profile from "./pages/Profile";

const Loadable =
  (Component: React.LazyExoticComponent<FC>) =>
  // eslint-disable-next-line react/display-name
  (props: React.ComponentProps<FC>) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const MainLayout = Loadable(
  lazy(() => import("./components/smart/MainLayout"))
);
const Error = Loadable(lazy(() => import("./components/smart/ErrorPage")));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "calculation",
        element: <Calculation />,
      },
      {
        path: "for-loyers",
        element: <ForLoyers />,
      },
      {
        path: "explanations",
        element: <Explanations />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "freedom",
        element: <OnFreedom />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

// export const GetRoutes = (nestedRouteArray: RouteObject[] = []) => {
//   const result: Array<string | string[]> = []
//   const routesArray = nestedRouteArray.length === 0 ? routes : nestedRouteArray

//   routesArray.forEach((route) => {
//     if (Object.prototype.hasOwnProperty.call(route, 'children')) {
//       result.push(route.path as string)
//       result.push(GetRoutes(route.children))
//     } else {
//       result.push(route.path as string)
//     }
//   })

//   return [...new Set(result.flat())].filter((route) => route !== '*')
// }
