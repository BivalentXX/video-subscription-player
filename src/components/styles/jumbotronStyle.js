import styled from 'styled-components/macro';

export const Piece = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 0 5%;
  color: white;
  overflow: hidden;
  background-image: linear-gradient(#000000, #080000);
`;



export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;
  background-color: #000000;
  padding: 50px 150px;
  height: 100%;
  

  @media (max-width: 1000px) {
    flex-direction: column
  }
`;


export const Contents = styled.div`


  @media (max-width: 1000px) {
    ${Piece}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Panel = styled.div`
  width: 50%;
  

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 46px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;


