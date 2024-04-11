// Components
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import MobileHeader from "./common/components/MobileHeader/MobileHeader";
// CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MobileHeader />

        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
