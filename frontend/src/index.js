import * as React from "react";
import "./index.css";

import { App } from "./main/App.js";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
