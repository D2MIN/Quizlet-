import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/router";
import "./Components/App/ScrolbarStyle.scss";

function App() {
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
