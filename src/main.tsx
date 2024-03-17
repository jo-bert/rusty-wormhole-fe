import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);
