import React from 'react'
import css from './form.module.css'

export default function Form() {
  return (
    <div>
      <div className={css.form}>
        <div className={css.heading}>
          <h1>We solve digital problems with an outstanding creative flare</h1>
          <p>We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.</p>
        </div>
        <div className={css.regis}>
          <div className={css.logo}>
            <h3 id={css.sign}>SIGN UP <hr /></h3>
            <h3 id={css.login}>LOGIN <hr /></h3>
          </div>
          <div className={css.data}>
          <input id={css.input1} type="email" placeholder='Your email' />
          <input id={css.input2} type="password" placeholder='Your password' />
          <button id={css.btn1}>Create an Account</button>
          <button id={css.btn2}>Login via Twitter</button>
          </div>
        </div>

      </div>
    </div>
  )
}
