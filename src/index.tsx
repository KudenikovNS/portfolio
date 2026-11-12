import ReactDOM from "react-dom/client";
import "./styles/global.css";
import {App} from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element #root not found in public/index.html");
}

ReactDOM.createRoot(rootElement).render(<App/>);
