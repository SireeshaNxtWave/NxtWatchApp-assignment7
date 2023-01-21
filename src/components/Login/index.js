import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginBgContainer,
  LoginCard,
  LabelName,
  Input,
  WebsiteLogo,
  CheckBoxContainer,
  LoginButton,
  ErrorMsg,
  CheckboxLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({showPassword: true})
    } else {
      this.setState({showPassword: false})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      showPassword,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value

          return (
            <LoginBgContainer mode={activeTheme}>
              <LoginCard mode={activeTheme} onSubmit={this.onSubmitForm}>
                {activeTheme === 'light' ? (
                  <WebsiteLogo
                    alt="website logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                ) : (
                  <WebsiteLogo
                    alt=""
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  />
                )}
                <LabelName mode={activeTheme} htmlFor="username">
                  USERNAME
                </LabelName>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={this.onChangeUserName}
                />
                <LabelName mode={activeTheme} htmlFor="password">
                  PASSWORD
                </LabelName>
                <Input
                  id="password"
                  type={showPassword === true ? 'text' : 'password'}
                  value={password}
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />
                <CheckBoxContainer>
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={this.showPassword}
                  />
                  <CheckboxLabel mode={activeTheme} htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginCard>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
