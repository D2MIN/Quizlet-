import style from './ButtonForm.module.scss';

interface ButtonFormProp{
    text : string
}

export function ButtonForm({text}: ButtonFormProp){
    return(
        <div className={style.ButtonForm}>
            <button className={style.button}>{text}</button>
        </div>
    )
}