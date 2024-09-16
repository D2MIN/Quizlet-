import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "../../Widgets/Footer/Footer";
import { Header } from "../../Widgets/Header/Header";
import { MainBody } from "../../Widgets/MainBody/MainBody";
import style from "./Main.module.scss";
import React from "react";

export function Main(){
    return(
        <div className={style.MainPage}>
            <div className={style.header}>
                <Header/>
            </div>
            <div className={style.body}>
                <ScrollRestoration/>
                <Outlet />
            </div>
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
    );
}