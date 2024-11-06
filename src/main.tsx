import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import ReactQueryProvider from "./providers/ReactQueryProvider.tsx";
import "./styles/index.css";
import "./styles/main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </RecoilRoot>
  </StrictMode>
);
