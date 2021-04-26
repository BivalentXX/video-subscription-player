import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 30px 68px 40px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  height: 230px;
  width: 100%;
  margin-bottom: 70px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;


export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 8px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


export const Input = styled.input`
  max-width: 350px;
  width: 100%;
  border: 0;
  border-radius: 6px;
  padding: 10px;
  height: 50px;
  box-sizing: border-box;
  font-size: 24px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  display: block;
  background-color: #e50914;
  width: 80%;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 17px;
  border-radius: 3px;
  padding: 8px 10px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;
