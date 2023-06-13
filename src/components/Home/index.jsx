import React, { useState, useEffect } from 'react';
import style from './style.module.scss'
import { useTranslation } from "react-i18next"
import i18next from 'i18next'
import { Link } from 'react-router-dom'
import Logo from './../../assets/Logo.png'
import Logo2 from './../../assets/Logo2.png'


export default function Home() {
    const { t } = useTranslation();
    const textList = [
        t('home__subtitle1'),
        t('home__subtitle2'),
        t('home__subtitle3'),
        t('home__subtitle4'),
        t('home__subtitle5'),
        t('home__subtitle6'),
        t('home__subtitle7'),
        t('home__subtitle8'),
        t('home__subtitle9'),
        t('home__subtitle10'),
        t('home__subtitle11')
      ];
    const delay = 4000; // Задержка между сменой строк (в миллисекундах)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
      }, delay);
  
      return () => clearTimeout(timer);
    }, [currentIndex, textList.length, delay]);
    return (
        <>
            <div className={style.home}>
                <div className="container">
                    <div className={style.languages}>
                        <button onClick={() => {
                            i18next.changeLanguage('ru')
                        }}>ru</button><span>/</span><button onClick={() => {
                            i18next.changeLanguage('en')
                        }}>en</button>
                    </div>
                    <div className={style.logo}>
                        <img className={style.logo1} src={Logo} alt="Logo" />
                        <img className={style.logo2} src={Logo2} alt="Logo" />
                    </div>
                    <h1 className={style.title1}>{t('home__title1')}</h1>
                    <h1 className={style.title2}>{t('home__title2')}</h1>
                    <p className={style.subtitle}>{textList[currentIndex]}</p>
                </div>
            </div>
        </>
    )
}
