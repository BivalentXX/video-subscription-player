import React from 'react'
import { Container, Title, List, User, Picture, Name } from './styles/profilesStyle'

//Title, List, User, Picture, Name,

export default function Profiles({ children, ...props }) {
  return (
    <Container {...props}>{children}</Container>
  )
}

Profiles.Title = function ProfilesTitle ({ children, ...props }) { 
  return <Title { ...props}>{children}</Title>
}

Profiles.List = function ProfilesList ({ children, ...props }) { 
  return <List { ...props}>{children}</List>
}

Profiles.User = function ProfilesUser ({ children, ...props }) { 
  return <User { ...props}>{children}</User>
}

Profiles.Picture = function ProfilesPicture ({ src, ...props }) { 
  return <Picture { ...props} src={src ? 
    `/images/users/${src}.png` :
    `/images/misc/loading.gif` } />
}

Profiles.Name = function ProfilesName ({ children, ...props }) { 
  return <Name { ...props}>{children}</Name>
}



