import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { AccountForm } from '../components'
import { HeaderContainer, FooterContainer } from '../containers'
import * as ROUTES from '../router/routes'

export default function Signup() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  
  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => 
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,          
        }).then(() => {
          history.push(ROUTES.BROWSE);
        })
      ).catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })  
  }

  return (
    <>
  <HeaderContainer>
    <AccountForm>
      <AccountForm.Title>Sign Up</AccountForm.Title>
      {error && <AccountForm.Error data-testid="error">{error}</AccountForm.Error>}

      <AccountForm.Base onSubmit={handleSignup} method="POST">
        <AccountForm.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
        />
        <AccountForm.Input
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <AccountForm.Input
          type="password"
          value={password}
          autoComplete="off"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <AccountForm.Button disabled={isInvalid} type="submit" data-testid="sign-in">
          Sign Up
        </AccountForm.Button>
      </AccountForm.Base>

      <AccountForm.Text>
      Already a user?  <AccountForm.Link to="/signin">Sign in now.</AccountForm.Link>
      </AccountForm.Text>
      <AccountForm.TextSmall>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
      </AccountForm.TextSmall>
    </AccountForm>
  </HeaderContainer>
  <FooterContainer />
  </>
  )
}
