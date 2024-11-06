import React from 'react'
import QuoteStyle from "../css/QuoteStyling/QuoteStyle.module.css"
import CustomButton from './CustomButton'
function QuoteSection() {
  return (
    <div className={QuoteStyle.quoteContainer}>
        <h2>Do you need any help for <span>electricity ?</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div>
            <CustomButton title='Get a Quote'/>
            <CustomButton title='Call Now'/>
        </div>
    </div>
  )
}

export default QuoteSection