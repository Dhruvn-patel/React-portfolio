import React, { useState } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars , FaModx} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick=()=>setIsOpen(!isOpen)
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center",
           justifyContent:"space-between",
           color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <FaModx size="3rem"/>
          </a>
        </NavLogo>
        <MobileIcon>
         {!isOpen ? <FaBars onClick={handleClick
          } />
          :<AiOutlineClose onClick={handleClick
          }/>
          }
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={handleClick
          }>About</MobileLink>
            <MobileLink href='#skills' onClick={handleClick
          }>Skills</MobileLink>
            <MobileLink href='#experience' onClick={handleClick
          }>Experience</MobileLink>
            <MobileLink href='#projects' onClick={handleClick
          }>Projects</MobileLink>
            <MobileLink href='#education' onClick={handleClick
          }>Education</MobileLink>
           
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar