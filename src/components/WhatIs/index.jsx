import React from 'react'
import style from './style.module.scss'
import Logo from './../../assets/Logo.png'
import WhatIsImg from './../../assets/WhatIsImg.jpg'
import { useTranslation } from "react-i18next"


export default function WhatIs() {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.whatIs}>
        <div className="container">
          <div className={style.whatIs__container}>
            <div className={style.inform}>
              <img src={Logo} alt="Logo" />
              <h4 className={style.title}>{t('whatIs__title')}<br /> HaaS / DaaS</h4>
              <div>
                <span>1. HaaS - Hardware as a Service</span>
                <p>{t('whatIs__inform__text1')}</p>
              </div>
              <div>
                <span>2. DaaS - Device as a Service</span>
                <p>{t('whatIs__inform__text2')}</p>
              </div>
            </div>
            <div className={style.img}>
              <img src={WhatIsImg} alt="Img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
