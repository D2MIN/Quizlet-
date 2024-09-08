import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Pages/MainPage/Main";
import { Header } from "../Components/Widgets/Header/Header";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>
    },
    {
        path : 'create-card',
        element : <Header/>
    },
    {
        path : 'exercises',
        element : <Header/>
    },
])