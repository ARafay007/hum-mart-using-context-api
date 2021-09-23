import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/ContextStore";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.querySelector("#root")
);
