import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { AccountForm } from '../components'
import { HeaderContainer, FooterContainer } from '../containers'
import * as ROUTES from '../router/routes'


export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
    <HeaderContainer>
    <AccountForm>
      <AccountForm.Title>Sign In</AccountForm.Title>
      {error && <AccountForm.Error data-testid="error">{error}</AccountForm.Error>}

      <AccountForm.Base onSubmit={handleSignin} method="POST">
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
          Sign In
        </AccountForm.Button>
      </AccountForm.Base>

      <AccountForm.Text>
        New to Netflix? <AccountForm.Link to="/signup">Sign up now.</AccountForm.Link>
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
