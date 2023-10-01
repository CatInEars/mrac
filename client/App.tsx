import React from "react";
import { createRoot } from "react-dom/client";
import WelcomePage from "./features/WelcomePage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<WelcomePage />);
