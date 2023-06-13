import React from 'react'
import style from './style.module.scss'
import { useTranslation } from "react-i18next"

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <div className={style.aboutUs}>
        <div className="container">
          <h2 className={style.title}>{t('aboutUs__title')}</h2>
          <h4 className={style.decisions__title}>{t('decisions__title')}</h4>
          <div className={style.decisions}>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text1')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text1')}</p>
            </div>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text2')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text2')}</p>
            </div>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text3')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text3')}</p>
            </div>
            <div className={style.decisions__example}>
              <div>
                <p>{t('decisions__text4')}</p>
              </div>
              <p className={style.decisions__example__text}><span>Carbon Copy</span>{t('decisions__example__text4')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
