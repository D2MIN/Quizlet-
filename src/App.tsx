import { RouterProvider } from "react-router-dom";
import { Main } from "./Components/Pages/MainPage/Main";
import { Router } from "./Router/router";

function App() {
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
