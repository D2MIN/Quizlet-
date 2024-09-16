import { useState } from "react";
import style from "./InputForm.module.scss";

interface InputFormProp{
    text : string
    title : string
}

export function InputForm({text, title} : InputFormProp){
    
    const [value,setValue] = useState(text)

    return(
        <div className={style.InputForm}>
            <p className={style.title}>{title}</p>
            <input
                className={style.input}
                type="text"
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            />
        </div>
    )
}