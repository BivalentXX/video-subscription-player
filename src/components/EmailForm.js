import React from 'react'
import { Container, Input, Button, Text, Break } from './styles/emailformStyle.js'

//used in the AccordionContainer
export default function EmailForm({ children, ...props }) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}

EmailForm.Input = function EmailFormInput({ ...props}) {
  return <Input {...props} />
}

EmailForm.Button = function EmailFormButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  )
}

EmailForm.Text = function EmailFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

EmailForm.Break = function EmailFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
