import React from 'react'
import CurrencyRatesList from '../CurrencyRatesList'
import CurrencyFilter from '../CurrencyFilter'
import CSSModules from 'react-css-modules';
import style from './style.css'

const MainPage = () => (
  <div styleName="content-container">
    <div styleName="content">
      <div styleName="filter-container">
        <CurrencyFilter/>
      </div>
      <div styleName="list-container">
        <CurrencyRatesList/>
      </div>
    </div>  
  </div>
);

export default CSSModules(MainPage, style);