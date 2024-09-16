import React, { useState } from "react";
import style from './CreateCard.module.scss';
import { ButtonForm } from "../../Shared/ButtonForm/ButtonForm";
import { InputForm } from "../../Shared/InputForm/InputForm";

export function CreateCard(){
    
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [messageStyle, setMessageStyle] = useState<string>('');
    const [message, setMessage] = useState('')

    function handleImageChange(event:any){
        const file = event.target.files[0];
        if(file){
            setSelectedImage(URL.createObjectURL(file));
        };
    };
    
    return(
        <div className={style.CreateCard}>
            <div className={`${style.submitMassege} ${style[messageStyle]}`}>{message}</div>
            <h1 className={style.createTitle}>Создание карточки</h1>
            <div className={style.createCardSection}>
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
                    <InputForm text='' title="Слово"/>
                    <InputForm text='' title="Перевод"/>
                    <InputForm text='' title="Описание"/>
                </div>
                <div className={style.button}>
                    <ButtonForm setMessageStyle={setMessageStyle} setMessage={setMessage} message="Карточка создана" text="Создать"/>
                </div>
            </div>
            <div className={style.helper}>
                <h1>Инструкция по созданию карточки</h1>
                <ul className={style.helperList}>
                    <li>Добавте фотограцию для вашей карточки, это можно сделать нажав по кнопке <strong>Выбрать фото</strong> или перенести фоту в поле для фотографии</li>
                    <li>Введите изучаемое слово в поле <strong>Слово</strong></li>
                    <li>Введите перевод изуаемого слова в поле <strong>Перевод</strong></li>
                    <li>По необходимости можете добавить краткое описание в поле <strong>Описание</strong>, оно может помоч вам в изучении слов</li>
                </ul>
                <div className={style.examples}>
                    <h1>Пример заполнения #1</h1>
                    <p>
                        Мы хотим изучить слово <strong>Город</strong> на английском. Для этого ищем
                        и скачиваем изображение города. После добавляем его в поле для фотографии. 
                        В поле <strong>слово</strong> пишем <strong>Citi</strong>, а в поле <strong>перевод</strong> - <strong>Город</strong>. 
                        Описание оставим пустым
                    </p>
                    <h1>Пример заполнения #2</h1>
                    <p>
                        Мы хотим изучить все то же слово <strong>Город</strong> на английском, но с другим подходом.
                        Для этого ищем и скачиваем изображение рыбаловной сети. После добавляем его в поле для фотографии. 
                        В поле <strong>слово</strong> пишем <strong>Citi</strong>, а в поле <strong>перевод</strong> - <strong>Город</strong>. 
                        Но в описание добавляем ассоциативную подсказку: <strong>'Город, словно сеть связывает дома дорогами'</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}