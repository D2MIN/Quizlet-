import style from './MainBody.module.scss';
import React, { useEffect, useState } from 'react';
import { WordGenerator } from './WordsGenerator';

export function MainBody(){
    
    const [welcomeWord, setWelcomeWord] = useState('Привет');
    
    useEffect(()=>{
        setTimeout(()=>{
            let word = WordGenerator();
            setWelcomeWord(word)
        },2000);
    }, [welcomeWord])

    return(
        <div className={style.MainBody}>
            <div className={style.bodyContent}>
                <div className={style.welcomeTitle}>
                    {welcomeWord}
                </div>
                <div className={style.about}>
                    <div className={style.description}>
                        <h2 className={style.title}><strong>LanCard</strong> - ваш помощник в изучении различных языков.</h2>
                        <h3>
                            Создавайте, управляйте и делитесь карточками для запоминания новых слов и фраз легко и удобно. Наша платформа предлагает мощные инструменты для создания персонализированных карточек, которые помогут вам эффективно изучать иностранные языки и расширять словарный запас.
                        </h3>
                        <h2 className={style.featureTitle}>Основные возможности LanCard:</h2>
                        <ul>
                            <li className={style.feature}><strong>Интуитивно понятный интерфейс:</strong> Создавайте карточки всего за несколько кликов. Наш удобный интерфейс делает процесс создания карточек быстрым и простым.</li>
                            <li className={style.feature}><strong>Персонализированные карточки:</strong> Введите собственные слова, фразы и определения или используйте готовые шаблоны для создания уникальных карточек, соответствующих вашему уровню и целям.</li>
                            <li className={style.feature}><strong>Многоязычная поддержка:</strong> LanCard поддерживает изучение множества языков, от популярных европейских до экзотических и редких. Удобно переключайтесь между языками и расширяйте свои горизонты.</li>
                            <li className={style.feature}><strong>Эффективное запоминание:</strong> Наши алгоритмы повторения карточек на основе интервала помогут вам лучше запоминать информацию и достигать лучших результатов в обучении.</li>
                            <li className={style.feature}><strong>Доступ с любого устройства:</strong> Учитесь где угодно и когда угодно! LanCard доступен на всех устройствах, будь то компьютер, планшет или смартфон.</li>
                            <li className={style.feature}><strong>Сообщество и обмен:</strong> Делитесь своими карточками с друзьями или присоединяйтесь к сообществам изучающих язык. Обмен опытом и ресурсами делает изучение еще более увлекательным.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}