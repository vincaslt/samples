import React from 'react'
import style from './style.css'
import CurrencyRatesList from '../CurrencyRatesList'

const MainPage = () => (
  <div className={style.contentContainer}>
    <div className={style.content}>
      <div className={style.filterContainer}>
        filter
      </div>
      <div className={style.listContainer}>
        <CurrencyRatesList/>
      </div>
    </div>  
  </div>
);

export default MainPage;