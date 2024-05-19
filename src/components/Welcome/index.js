import {useHistory} from 'react-router-dom'
import Cookie from 'js-cookie'

const Welcome = () => {
  const history = useHistory()
  const onLogOutPage = () => {
    history.replace('/login')
    Cookie.remove('username')
    Cookie.remove('password')
  }

  return (
    <div>
      <h1>Welcome to my page!</h1>
      <center>
        <button type="button" onClick={onLogOutPage}>
          Log Out
        </button>
      </center>
    </div>
  )
}

export default Welcome
