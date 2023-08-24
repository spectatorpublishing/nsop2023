import React, {useState} from 'react';
import styled from 'styled-components';
import bubble from '../components/images/NavbarBubble.png'
import {sections} from '../data/mocksections';
import { NavHashLink } from 'react-router-hash-link';

const NavWrapper = styled.div`
   z-index: 1000;
   position: sticky;
   top: 0;
   margin-top: -20rem;
   a {
        text-decoration: none;
    }
    .desktop{
        @media only screen and (max-width: 1023px){
            display: none;
            margin-top: 20rem;
        }
    }
    @media only screen and (max-width: 1023px){
        margin-top: -15rem;
    }
`;

const VertNav = styled.div`
    width: fit-content;
    margin-left: auto;
    position: relative;
    text-align: center;
    
    @media only screen and (max-width: 1023px){
        transform: scale(0.8)
    }
`;

const SectionList = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 1.2rem;
    font-family: 'Lalezar';
    font-size: 1.2rem;
`;

const Tab = styled.a`
    display:block;
    text-align: center;
    color: black;
    color: ${props => props.currentSection ? '#AC3627' : 'black'};
    :hover {
        color: #AC3627;
        cursor:pointer;
    }
`;

const NavText = styled.div`
    font-style: normal;
`;

const NavBar = ({className}) => {
    return(
        <NavWrapper>
            <VertNav className = {`${className}`}>
                <img src={bubble} style={{height: "20rem"}}></img>
                <SectionList>
                    {sections.map((section, index) => (
                        <NavHashLink smooth to={section.url}>
                            <Tab currentSection = {window.location.pathname == section.url} key={index}>
                            <NavText>{section.title}</NavText>  
                            </Tab>
                        </NavHashLink>
                    ))}
                </SectionList>
            </VertNav>
        </NavWrapper>
    );
};

export default NavBar;