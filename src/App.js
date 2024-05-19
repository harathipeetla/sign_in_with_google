import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Welcome from './components/Welcome'
import LoginPage from './components/Login'

import RegisterPage from './components/Register'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/welcom" component={Welcome} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
