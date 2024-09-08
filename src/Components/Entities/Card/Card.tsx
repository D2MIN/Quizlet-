import style from './CardStyle.module.scss';
import { PenIcon } from '../../Shared/PenIcon/PenIcon';
import { CloseIcon } from '../../Shared/CloseIcon/CloseIcon';

interface CardProp{
    cardId : number | string;
    img : string;
    word : string;
    translate : string;
    descript : string;
}

export function Card( {cardId,img,word,translate,descript}: CardProp ){

    if(descript.length > 48){descript = descript.slice(0,45) + '...'};
    if(descript.length == 0){descript = 'Нет описания'}

    function deleteCard( cardId: string | number, userId : string | number ){
        // Запрос к БД на удаление карточки у пользователя 
    }

    function changeCard( cardId: string | number ){
        // Переодрисация на страницу с созданием карточки куда передаётся
        // ID для изминения нужной карточки 
    }

    return(
        <div className={style.Card}>
            <div className={style.cardSection}>
                <div className={style.cardAction}>
                    <div className={style.pen}> <PenIcon/> </div>
                    <div className={style.close}> <CloseIcon/> </div>
                </div>
                <div className={style.cardImg}>
                    <img src={img} alt="Изображение" />
                </div>
                <div className={style.cardWord}>
                    <strong className={style.word}>{word}</strong>
                    <span className={style.translate}>{translate}</span>
                </div>
                <div className={style.cardDescript}>
                    <p>{descript}</p>
                </div>
            </div>
        </div>
    )
}