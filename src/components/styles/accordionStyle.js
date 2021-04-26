import styled, { keyframes } from 'styled-components/macro'

//Container, Inner, Panel, Title, Item,  Header, Body

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;

`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;


export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Item = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  color: white;
  margin-bottom: 8px;
  max-width: 670px;
  width: 100%;
  

  &:first-of-type {
    margin-top: 3em;
  }
`;



export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;

const slidedown = keyframes`
  from { max-height: 0px;}
  to { max-height: 200px;}
`;


/*const slideup = keyframes`
  from { max-height: 200px;}
  to { max-height: 0px;}  

animation-name: ${props => props.toggleShow ? ${slidedown} : ${slideup}};

 return <Body toggleShow={toggleShow}>{children}</Body>
`;*/



export const Body = styled.div`
  animation-name: ${slidedown};
  animation-duration: 0.25s;
  animation-timing-function: linear;
 
  font-size: 18px; 
  line-height: normal;

  padding: 0.8em 2.2em 0.8em 1.2em; 
  white-space: pre-wrap;
  user-select: none;


  @media (max-width: 600px) {
    font-size: 16px; 
    line-height: 22px;
  }
`;

