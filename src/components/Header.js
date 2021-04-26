import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Frame, Logo, Button, FeatureText, FeatureSubText, TextLink,
   Group, BrowseFeature, SearchGroup, SearchIcon, SearchInput, Profile, Picture, Dropdown, Playbutton} from './styles/headerStyle';

export default function Header({ bg = true, children, ...props }) {
  return bg ? (<Background {...props}>{children}</Background>) : (children);
    }

Header.Group = function HeaderGroup({ children, ...props}) {
      return <Group {...props}>{children}</Group>
    }

Header.Frame = function HeaderFrame({ children, ...props}) {
      return <Frame {...props}>{children}</Frame>
    }
    
Header.BrowseFeature = function HeaderBrowseFeature({ children, ...props}) {
  return <BrowseFeature {...props}>{children}</BrowseFeature>
}

Header.FeatureText = function HeaderFeatureText({ children, ...props}) {
  return <FeatureText {...props}>{children}</FeatureText>
}

Header.FeatureSubText = function HeaderFeatureSubText({ children, ...props}) {
  return <FeatureSubText {...props}>{children}</FeatureSubText>
}

Header.Playbutton = function HeaderPlatbutton({ children, ...props}) {
  return <Playbutton {...props}>{children}</Playbutton>
}

Header.SearchGroup = function HeaderSearchGroup({ searchTerm, setSearchTerm, ...props}) {
    const [searchActive, setSearchActive] = useState(false);

    return( 
      <SearchGroup {...props}>
        <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
          <img src="/images/icons/search.png" alt="Search" /> 
        </SearchIcon>
        <SearchInput 
          value={searchTerm} 
          onChange={({target}) => setSearchTerm(target.value)}
          placeholder="Search"
          active={searchActive}
        />
      </SearchGroup>
    )
}


//   return <SearchIcon {...props}>{children}</SearchIcon>
//   return <SearchInput {...props}>{children}</SearchInput>
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...props}) {
  return <Picture {...props} src={`/images/users/${src}.png`} />
}

Header.Dropdown = function HeaderDropdown({ children, ...props}) {
  return <Dropdown {...props}>{children}</Dropdown>
}

Header.Button = function HeaderButton({ children, ...props}) {
  return <Button {...props}>{children}</Button>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};


Header.Logo = function HeaderLogo({ to, ...props}) {
  return (
  <ReactRouterLink to={to}>
    <Logo {...props}></Logo>
  </ReactRouterLink>
  )
}


