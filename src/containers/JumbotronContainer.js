import React from 'react';
import { Jumbotron } from '../components';
import jumbotronData from '../fixtures/jumbotron.json';

export default function JumbotronContainer() {
  return (
    <Jumbotron.Contents>
      {jumbotronData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Panel>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Panel>
          <Jumbotron.Panel>
             <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Panel>
        </Jumbotron>
      ))}
    </Jumbotron.Contents>
  );
}

