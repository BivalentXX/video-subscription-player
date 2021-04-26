import React from 'react'
import { Header, Profiles } from '../components'
import * as ROUTES from '../router/routes'
import logo from '../logo.svg'

export default function ProfilesContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => setProfile({
            displayName: user.displayName,
            photoURL: user.photoURL,
          })}>
            <Profiles.Picture src={user.photoURL}/>
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}
