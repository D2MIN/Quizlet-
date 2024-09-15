import style from "./Header.module.scss";
import {Link} from 'react-router-dom'
import React from "react";

export function Header(){
    return(
        <div className={style.Header}>
            <div className={`${style.mainLink} Link`}>
                <Link to={"/"}><h3>Главная</h3></Link>
            </div>
            <div className={`${style.createCardLink} Link`}>
                <Link to={'/create-card'}><h3>Сделать карточку</h3></Link>
            </div>
            <div className={`${style.exercisesLink} Link`}>
                <Link to={'/exercises'}><h3>Упражнения</h3></Link>
            </div>
        </div>
    );
}