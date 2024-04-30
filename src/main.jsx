import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#ff0080", // Vibrant pink
    800: "#00d1ff", // Bright blue
    700: "#ffcf00"  // Sunny yellow
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
