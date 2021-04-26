import React from 'react'
import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Button } from './styles/accountformStyle'

export default function AccountForm({ children, ...props }) {
  return (
    <Container {...props}>{children}</Container>
  )
}

AccountForm.Base = function EmailFormBase({ children, ...props}) {
  return <Base {...props}>{children}</Base>
}


AccountForm.Error = function EmailFormError({ children, ...props}) {
  return <Error {...props}>{children}</Error>
}

AccountForm.Title = function EmailFormTitle({ children, ...props}) {
  return <Title {...props}>{children}</Title>
}

AccountForm.Text = function EmailFormText({ children, ...props}) {
  return <Text {...props}>{children}</Text>
}

AccountForm.TextSmall = function EmailFormTextSmall({ children, ...props}) {
  return <TextSmall {...props}>{children}</TextSmall>
}

AccountForm.Link = function EmailFormLink({ children, ...props}) {
  return <Link {...props}>{children}</Link>
}

AccountForm.Input = function EmailFormInput({ children, ...props}) {
  return <Input {...props}>{children}</Input>
}

AccountForm.Button = function EmailFormButton({ children, ...props}) {
  return <Button {...props}>{children}</Button>
}