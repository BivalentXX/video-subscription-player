import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../router/routes'
import logo from '../logo.svg'

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>
        <Header.Button to={ROUTES.SIGNUP}>Sign Up</Header.Button> 
      </Header.Frame>
      <Header.FeatureText>Movies, Shows, and more.</Header.FeatureText>
      <Header.FeatureSubText>Watch Anywhere. Cancel anytime</Header.FeatureSubText> 
       
      {children}
    </Header>
    
  )
}

 