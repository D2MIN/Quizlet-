import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Pages/MainPage/Main";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>
    },
    {
        path : 'create-card',
        element : <>Create card page</>
    },
    {
        path : 'exercises',
        element : <>exercices page</>
    },
])