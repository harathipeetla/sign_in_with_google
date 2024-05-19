import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import SignInWithGoogle from '../SignInGoogle'


import './index.css'

class LoginPage extends Component {
  state = {
    userName: '',
    password: '',
    errorMsg: '',
  }

  onChnageUserName = e => {
    this.setState({userName: e.target.value})
  }

  onChnagePassword = e => {
    this.setState({password: e.target.value})
  }

  onLoginUserDetails = () => {
    const {userName, password} = this.state
    const existingUserName = Cookies.get('username')
    const existingPassword = Cookies.get('password')

    if (existingUserName === userName && existingPassword === password) {
      const {history} = this.props
      history.replace('/welcom')
    } else if (userName === '' || password === '') {
      this.setState({errorMsg: 'feilds should not be empty'})
    } else {
      this.setState({errorMsg: 'User does not exists'})
    }
  }

  render() {
    const {userName, password, errorMsg} = this.state

    return (
      <div className="login-page-container">
        <div className="login-with-google-container">
          <div>
            <SignInWithGoogle />
          </div>
        </div>
        <div className="user-name-container">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            className="user-name-feild"
            value={userName}
            onChange={this.onChnageUserName}
            id="name"
          />
        </div>
        <div className="user-password-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="password-feild"
            value={password}
            onChange={this.onChnagePassword}
            id="password"
          />
        </div>
        <div className="login-button-container">
          <button
            className="login-button"
            type="button"
            onClick={this.onLoginUserDetails}
          >
            Login
          </button>
        </div>
        <p className="error-msg">{errorMsg}</p>
        <p>
          Dont have an account{' '}
          <span className="register">
            <Link to="/register">Register Here</Link>
          </span>
        </p>
      </div>
    )
  }
}
export default LoginPage
