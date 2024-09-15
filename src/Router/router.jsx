import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Pages/MainPage/Main";
import { Card } from "../Components/Entities/Card/Card";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>
    },
    {
        path : 'create-card',
        element : <Main/>
    },
    {
        path : 'exercises',
        element : <Main/>
    },
]);