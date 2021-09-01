import React,{ useEffect } from 'react'

import './Login.css'
import logo from '../../../assets/images/logo_login.png'

const Login = () => {
    useEffect(() => {
        const login = () => {
            let signin_form = document.querySelector('#signin-form')

            let signin_btn = document.querySelector('#signin-btn')

            const validateEmail = (email) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                return re.test(String(email).toLowerCase())
            }

            const checkSigninInput = (input) => {
                let err_span = signin_form.querySelector(`span[data-err-for="${input.id}"]`)
                let val = input.value.trim()
                let form_group = input.parentElement

                switch(input.getAttribute('type')){
                    case 'password':
                        if (val.length < 6) {
                            form_group.classList.add('err')
                            form_group.classList.remove('success')
                            err_span.innerHTML = 'Password must be at least 6 characters'
                        } else {
                            form_group.classList.add('success')
                            form_group.classList.remove('err')
                            err_span.innerHTML = ''
                        }
                        break;

                    case 'email':
                        if (val.length === 0 || !validateEmail(val)) {
                            form_group.classList.add('err')
                            form_group.classList.remove('success')
                            err_span.innerHTML = 'Email is invalid'
                        } else {
                            form_group.classList.add('success')
                            form_group.classList.remove('err')
                            err_span.innerHTML = ''
                        }
                        break;

                    default :
                         console.error('err')
                }
            }

            const checkSigninForm = () => {
                let inputs = signin_form.querySelectorAll('.form-input')
                inputs.forEach(input => checkSigninInput(input))
            }

            signin_btn.onclick = () => {
                checkSigninForm()
            }

            let inputs = signin_form.querySelectorAll('.form-input')
            inputs.forEach(input => {
                input.addEventListener('focusout', () => {
                    checkSigninInput(input)
                })
            })
        }
        login()
    },[])
    return (
      <div className="container-login">
        <div class="form" id="signin-form">
          <a href="/" class="form-logo">
            <img src={logo} alt="company logo" />
          </a>
          <div class="form-group">
            <input
              type="email"
              class="form-input"
              placeholder="Email"
              id="signin-email"
            />
            <span class="form-input-icon err">
              <i class="bx bx-error-circle"></i>
            </span>
            <span class="form-input-icon success">
              <i class="bx bx-check-circle"></i>
            </span>
            <span class="form-input-err-msg" data-err-for="signin-email"></span>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-input"
              placeholder="Password"
              id="signin-password"
            />
            <span class="form-input-icon err">
              <i class="bx bx-error-circle"></i>
            </span>
            <span class="form-input-icon success">
              <i class="bx bx-check-circle"></i>
            </span>
            <span
              class="form-input-err-msg"
              data-err-for="signin-password"
            ></span>
          </div>
          <div class="form-group form-group-checkbox">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              checked="checked"
            />
            <label for="remember">
              Remember Me
              <i class="bx bx-check"></i>
            </label>
          </div>
          <button class="form-btn" id="signin-btn">
            Sign in
          </button>
          <span class="form-delimiter">or connect with</span>
          <div class="form-social">
            <a href="/" class="form-social-item fb">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="/" class="form-social-item tw">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="/" class="form-social-item gg">
              <i class="bx bxl-google"></i>
            </a>
          </div>
          <span class="form-txt">
            Don't have an account?
            <a href="/"> Sign up!</a>
          </span>
          <span class="form-txt">
            <a href="/">Forgot password?</a>
          </span>
        </div>
      </div>
    );
}

export default Login
