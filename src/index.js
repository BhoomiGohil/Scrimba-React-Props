import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root"); // Select the DOM element with the ID 'root'

if (!rootElement) throw new Error("Failed to find the root h1"); // Throw an error if the root element is not found

const root = createRoot(rootElement); // Create a root for rendering React components

// Render the MainContent component inside the root element
root.render(<MainContent />);
