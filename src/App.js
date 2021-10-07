// Import From NPM
import { BrowserRouter, Route } from "react-router-dom";
import  { useEffect } from "react";

// Import Components
import Home from "./component/Home";

// Import Style
import "./style/all.scss";

function App() {
  useEffect(() => {
    document.title = "Mr.Kalumian | WebSite";
  });

  return (
    <main>
      <BrowserRouter>
        <Route component={Home} path="/" />
      </BrowserRouter>
    </main>
  );
}

export default App;
