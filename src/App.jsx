import "./App.css";
import routers from "./routers";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};
function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>{routers}</BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
