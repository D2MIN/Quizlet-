import style from "./Header.module.scss";
import {NavLink} from 'react-router-dom'
import React from "react";

export function Header(){

    return(
        <div className={style.Header}>
            <div className={`Link`}>
                <NavLink to={"/"} className={({isActive}) => (isActive ? style.active : style.link)}> 
                    <h3>Главная</h3>
                </NavLink>
            </div>
            <div className={`Link`}>
                <NavLink to={'/create-card'} className={({isActive}) => (isActive ? style.active : style.link)} >
                    <h3>Сделать карточку</h3>
                </NavLink>
            </div>
            <div className={`Link`}>
                <NavLink to={'/exercises'} className={({isActive}) => (isActive ? style.active : style.link)} >
                    <h3>Упражнения</h3>
                </NavLink>
            </div>
        </div>
    );
}