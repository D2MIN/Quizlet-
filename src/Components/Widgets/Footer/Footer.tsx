import style from './Footer.module.scss';
import React from 'react';

export function Footer(){
    return(
        <div className={style.Footer}>
            <div className={style.footerContent}>
                <p>контактная информация</p>
            </div>
        </div>
    )
}