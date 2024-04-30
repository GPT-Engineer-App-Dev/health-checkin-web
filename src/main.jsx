import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#B0BEC5", // Soft blue gray
    800: "#CFD8DC", // Light blue gray
    700: "#ECEFF1"  // Very light blue gray
  },
};

const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Poppins', sans-serif",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
