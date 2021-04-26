import React from 'react'
import { EmailForm } from '../components'
import { HeaderContainer, JumbotronContainer, FooterContainer, AccordionContainer } from '../containers';

export default function Home() {
  return (
    <>
      <HeaderContainer>
          <EmailForm>
            <EmailForm.Input placeholder="Email address" />
            <EmailForm.Button>Try it now</EmailForm.Button>
          </EmailForm>        
      </HeaderContainer> 
    
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
 
