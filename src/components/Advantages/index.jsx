import React from 'react'
import style from './style.module.scss'
import Logo from './../../assets/Logo2.png'
import { useTranslation } from "react-i18next"


export default function Advantages() {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.advantages}>
        <div className="container">
          <div className={style.containerTop}>
            <div className={style.title}>
              <h4>{t('advantages__title')}</h4>
              <p>HaaS <span>/</span> DaaS</p>
            </div>
            <div className={style.logo}>
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className={style.containerDown}>
            <div className={style.example}>
              <div className={style.example__number}>
                <p>1.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title1')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle1')}​</p>
            </div>
            <div className={style.example}>
              <div className={style.example__number}>
                <p>2.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title2')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle2')}</p>
            </div>
            <div className={style.example}>
              <div className={style.example__number}>
                <p>3.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title3')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle3')}​</p>
            </div>
            <div className={style.example}>
              <div className={style.example__number}>
                <p>4.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title4')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle4')}​</p>
            </div>
            <div className={style.example}>
              <div className={style.example__number}>
                <p>5.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title5')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle5')}​</p>
            </div>
            <div className={style.example}>
              <div className={style.example__number}>
                <p>6.</p>
              </div>
              <p className={style.example__title}>{t('advantages__example__title6')}</p>
              <p className={style.example__subtitle}>​{t('advantages__example__subtitle6')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
