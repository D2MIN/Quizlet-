import { useState } from 'react';
import style from './ButtonForm.module.scss';

interface ButtonFormProp{
    text : string
    message : string
    setMessageStyle : (a:string)=>void
    setMessage : (a:string)=>void
}

export function ButtonForm({text,message,setMessageStyle,setMessage}: ButtonFormProp){

    function submit(){
        setMessageStyle('submit');
        setMessage(message);
        setTimeout(()=>{setMessageStyle('')},2000);
    }

    return(
        <div className={style.ButtonForm}>
            <button onClick={submit} className={style.button}>{text}</button>
        </div>
    )
}