import React from 'react';
import { Accordion, EmailForm } from '../components';
import faqsData from '../fixtures/faqs.json'

export default function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}     

      <EmailForm>
        <EmailForm.Input placeholder="Email address" />
        <EmailForm.Button>Try it now</EmailForm.Button>
      </EmailForm>
    </Accordion>
    

  );
}