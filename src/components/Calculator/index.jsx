import React, { useState } from 'react'
import style from './style.module.scss'
import { useTranslation } from "react-i18next"

export default function Calculator() {
    const { t } = useTranslation();
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [dailyPayment, setDailyPayment] = useState(0);

    const calculatePayments = () => {
        const matrix = {
            0: 1,
            10: 1.119,
            20: 1.239,
            30: 1.361,
            40: 1.486,
            49: 1.617,
        };

        const enhancedRate = matrix[downPayment];
        const monthlyPayment = (amount * enhancedRate) / (term * 12);
        const dailyPayment = monthlyPayment / 30;

        setMonthlyPayment(monthlyPayment);
        setDailyPayment(dailyPayment);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculatePayments();
    };

    return (
        <>
            <div className={style.calculator}>
                <div className="container">
                    <h2>{t('calculator__title')}</h2>
                    <div className={style.calculator__container}>
                        <form onSubmit={handleSubmit}>
                            <div className={style.input}>
                                <label htmlFor="amount">{t('calculator__amount')}</label>
                                <input
                                    placeholder='от 1 000 000 р.'
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    min="1000000"
                                />
                            </div>
                            <div className={style.input}>
                                <label htmlFor="term">{t('calculator__term')}</label>
                                <select id="term" value={term} onChange={(e) => setTerm(e.target.value)} required>
                                    <option value="">{t('calculator__term1')}</option>
                                    <option value="1">{t('calculator__term2')}</option>
                                    <option value="2">{t('calculator__term3')}</option>
                                    <option value="3">{t('calculator__term4')}</option>
                                </select>
                            </div>
                            <div className={style.input}>
                                <label htmlFor="downPayment">{t('calculator__downPayment')}</label>
                                <select
                                    id="downPayment"
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(e.target.value)}
                                    required
                                >
                                    <option value="">{t('calculator__downPayment1')}</option>
                                    <option value="0">0%</option>
                                    <option value="10">10%</option>
                                    <option value="20">20%</option>
                                    <option value="30">30%</option>
                                    <option value="40">40%</option>
                                    <option value="49">49%</option>
                                </select>
                            </div>
                            <div className={style.button}>
                                <button type="submit">{t('calculator__button')}</button>
                            </div>
                        </form>
                        {monthlyPayment > 0 && dailyPayment > 0 && (
                            <div className={style.result}>
                                <h3>{t('calculator__result1')}</h3>
                                <p>{t('calculator__result2')} {monthlyPayment.toFixed(2)} руб.</p>
                                <p>{t('calculator__result3')} {dailyPayment.toFixed(2)} руб.</p>
                            </div>
                        )}
                    </div>

                </div>
                <div className={style.line}></div>
            </div >
        </>
    )
}
