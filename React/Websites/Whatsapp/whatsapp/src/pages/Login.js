import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({loginWithRedirect}) => {



  const navigate = useNavigate()
  // const signInWithGoogle = () => {
  //   auth
  //   .signInWithPopup(googleProvider)
  //   .then( (result) => {
  //     const newUser = {
  //       fullname: result.user.displayName,
  //       email: result.user.email,
  //       photoURL: result.user.photoURL,
  //     }
  //     navigate('/')
  //     localStorage.setItem('user', JSON.stringify(newUser))
  //     setUser(newUser)

  //     db.collection('users').doc(result.user.email).set(newUser)
  //   })
  //   .catch( (error) => alert(error.message))
  // }

  return (
    <div className="login">
      <div className="login_container">
        <img src="./whatsapp-logo.svg" alt="logo" />
        <p className="logo_name">WhatsApp Web</p>
        <button className='login_btn'
        onClick={loginWithRedirect}
        >Login</button>
      </div>
    </div>
  )
}

export default Login