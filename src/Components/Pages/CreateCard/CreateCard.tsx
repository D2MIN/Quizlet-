import React, { useState } from "react";
import style from './CreateCard.module.scss';
import { ButtonForm } from "../../Shared/ButtonForm/ButtonForm";
import { InputForm } from "../../Shared/InputForm/InputForm";

export function CreateCard(){
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    function handleImageChange(event:any){
        const file = event.target.files[0];
        if(file){
            setSelectedImage(URL.createObjectURL(file));
        };
    };
    
    return(
        <div className={style.CreateCard}>
            <div className={style.createCardSection}>
                <h1 style={{margin:'10px'}}>Создание карточки</h1>
                <div className={style.imgCard}>
                    <input
                        className={style.fileImg}
                        type='file'
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <div className={style.imgPrev}>
                        {selectedImage != null? 
                            (
                                <div>
                                    <img
                                        src={selectedImage}
                                        alt="Загруженное изображение"
                                    />
                                </div>
                            ) : 
                            <div className={style.selectTitle}>
                                <button className={style.selectBtn}>Выбрать фото</button>
                                <p>Или перетащите фото сюда </p>
                            </div>
                        }   
                    </div>
                </div>
                <div className={style.inputs}>
                    <InputForm text='Sad' title="Слово"/>
                    <InputForm text='Грустный' title="Перевод"/>
                    <InputForm text='Описание большое' title="Описание"/>
                </div>
                <div className={style.button}>
                    <ButtonForm text="Создать"/>
                </div>
            </div>
        </div>
    )
}