import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` 
  : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

    @media (max-width: 1100px) {
      ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;



  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

// background-image: url('../images/misc/movieReel.jpeg');
// overflow: hidden;
// background-size: cover;
// background-position: center;

export const Button = styled(ReactRouterLink)`
  display: flex;
  background-color: #e50914;
  width: auto;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 17px;
  border-radius: 3px;
  padding: 8px 10px 8px 10px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  text-align: left


  &:hover {
    background: #f40612;
  }
`;

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 10px;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const BrowseFeature = styled(Frame)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
`;

export const FeatureText = styled.h1`
color: white;
font-size: 54px;
text-shadow: 2px 2px 8px #FF0000;
line-height: 1.1;
margin-top: 0;
margin-bottom: 8px;

text-align: left;

@media (max-width: 600px) {
  font-size: 35px;
}
`;

export const FeatureSubText = styled.h2`
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  font-size: 24px;
  font-weight: normal;
  margin: 16px auto;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;



//////////////////Additional components for browse header below////////////////////
// Group, BrowseFeature, SearchGroup, SearchIcon, SearchInput, Profile Picture, Dropdown, Playbutton



export const SearchGroup = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 15px;
  width: 80px;
  top: 32px;
  right: 10px;
  align-items: flex-end;
  
  

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
    
  }

  ${Group} {
    margin-bottom: 10px;
    justify-content: right;
    

    &:last-of-type {
      margin-bottom: 0;
    }

    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;



export const Profile = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 20px;
  position: relative;


  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    
  }
`;


export const Playbutton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const Logo = styled.img`
  height: 38px;
  width: 128px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;


