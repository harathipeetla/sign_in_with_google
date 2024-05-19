import firebase from 'firebase'

import Welcome from '../Welcome'
import {FcGoogle} from 'react-icons/fc'
import {useState, useEffect} from 'react'

firebase.initializeApp({
  apiKey: 'AIzaSyAZxz3wBmyMXsotnAABrwVG2lDZUG2Qva8',
  authDomain: 'signin-project-871d2.firebaseapp.com',
  projectId: 'signin-project-871d2',
  storageBucket: 'signin-project-871d2.appspot.com',
  messagingSenderId: '742289012618',
  appId: '1:742289012618:web:4c532df6f4cd987b47fa73',
})
const auth = firebase.auth()

const SignInWithGoogle = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(person => {
      if (person) {
        setUser(person)
      } else {
        setUser(null)
      }
    })
  })
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <center>
        {user ? (
          <div>
            <Welcome />
            <button onClick={() => auth.signOut()}>Sign Out</button>
          </div>
        ) : (
          <button
            className="google-button"
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In with google <FcGoogle className="icon-g" />
          </button>
        )}
      </center>
    </div>
  )
}

export default SignInWithGoogle
