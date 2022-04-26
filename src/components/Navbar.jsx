import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { AIcon, CarContainer, Container, IconN, IconNavContainer, Input, Logo, LogoContainer, NavIcon, NavText, SearchContainer, TextNav, TextNavContainer, Wrapper } from './styles/Navbar.elements';

const MenuIcon = require.context('../assets/Icon', true);

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo src= {MenuIcon(`./logoNaranja.png`)}/>
        </LogoContainer>
        <SearchContainer>
          <Input placeholder='Buscar'/>
          <SearchIcon style={{ color:"gray", fontsize: 22}} />
        </SearchContainer>
        <IconNavContainer>
          <NavIcon>
            <AIcon href='#' title='Spray'><IconN src= {MenuIcon(`./sprayIcon.png`)}/></AIcon>
          </NavIcon>
          <NavIcon>
            <AIcon href='#' title='Tattoo'><IconN src= {MenuIcon(`./tattooIcon.png`)}/></AIcon>
          </NavIcon>
          <NavIcon>
            <AIcon href='#' title='Gallery'><IconN src= {MenuIcon(`./galleryIcon.png`)}/></AIcon>
          </NavIcon>
        </IconNavContainer>
        <TextNavContainer>
          <NavText>
            <TextNav>AboutPucho</TextNav>
          </NavText>
          <NavText>
            <TextNav>Blog</TextNav>
          </NavText>
          <NavText>
            <TextNav>Shop</TextNav>
          </NavText>
          <NavText>
            <TextNav>Contact</TextNav>
          </NavText>
        </TextNavContainer>
        <CarContainer>
          <AIcon href='#' title='Spray'><IconN src= {MenuIcon(`./CART ICON.png`)}/></AIcon>
        </CarContainer>
      </Wrapper>
    </Container>
  )
}

export default Navbar