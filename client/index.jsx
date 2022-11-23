import * as React from "react";
import { createRoot } from "react-dom/client";

import { Application } from "./Movies.jsx";
import ListMenu from "./listMenu.jsx";


const element = document.getElementById("app");
const root = createRoot(element);

root.render(<Application />);