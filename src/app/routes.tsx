import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import FloralBoutique from "./components/pages/FloralBoutique";
import About from "./components/pages/About";
import Reservations from "./components/pages/Reservations";
import Contact from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "florals", Component: FloralBoutique },
      { path: "about", Component: About },
      { path: "reservations", Component: Reservations },
      { path: "contact", Component: Contact },
    ],
  },
]);
