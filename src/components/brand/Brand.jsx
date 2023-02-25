import React from 'react'
import {google,slack,atlassian,shopify} from './imports'
import './Brand.css'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="google" />
    </div>
    <div>
    <img src={slack} alt="slack" />
    </div>
    <div>
    <img src={atlassian} alt="atlassian" />
    </div>
    <div>
    <img src={shopify} alt="shopify" />
    </div>

  </div>
  )
}

export default Brand