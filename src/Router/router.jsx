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
        element : <>Create card page</>
    },
    {
        path : 'exercises',
        element : <>exercices page</>
    },
    // Путь для проверки после нужно удалить его
    {
        path : 'card',
        element : <Card img='https://avatars.mds.yandex.net/i?id=842c82d78a30d8dc83d2a1f8b1e0edfd-5547365-images-thumbs&n=13' word='City' translate='Город' descript='Города как сети состоящая из домов и дорог'/>
    },
])