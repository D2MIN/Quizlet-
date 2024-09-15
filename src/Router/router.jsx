import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Pages/MainPage/Main";
import { Header } from "../Components/Widgets/Header/Header";
import { MainBody } from "../Components/Widgets/MainBody/MainBody";
import { CreateCard } from "../Components/Pages/CreateCard/CreateCard";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <MainBody/>
            },
            {
                path : 'create-card',
                element : <CreateCard/>
            }
        ]
    },
])