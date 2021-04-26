import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  
  padding: 40px 68px 20px;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

// background-color: rgba(0, 0, 0, 0.75);

export const Input = styled.input`
  max-width: 350px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  font-size: 24px

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 180px;
  
  height: 100%;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 20px;
  font-size: 17px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 20px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: white;
  text-align: center;
  margin-left: 5px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;