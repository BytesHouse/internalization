import React from 'react';
import style from './LanguageSwitcher.module.css'
import i18next from "i18next";

export const languages = ["en","ru","tr","zh","ko"]

const handleClickChangeLanguage = (lng) => {
    i18next.changeLanguage(lng);
}
const LanguageSwitcher = () => {
    return (
        <ul className={style.container}>
            {languages.map(item => <li onClick={() => handleClickChangeLanguage(item)} key={item}>{item}</li>)}
        </ul>
    );
};

export default LanguageSwitcher;