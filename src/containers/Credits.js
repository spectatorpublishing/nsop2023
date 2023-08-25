import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'

const CreditsContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top:10rem;
    @media only screen and (max-width: 768px){
        margin-top:0;
    }
`;

const SlantContainer = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 2rem;
`;

const SlantBorder = styled.div`
    z-index: -1;
    height: 6.5rem;
    background-color: black;
    clip-path: polygon(0 0%, 100% 89%, 100% 100%, 0 100%);
    @media only screen and (max-width: 768px){
        height: 2.48rem;
        clip-path: polygon(0 5%, 100% 88%, 100% 100%, 0 100%);
    }
`;

const Slant = styled.div`
    position: absolute;
    height: 6rem;
    width: 100%;
    display: block;
    z-index: 999;
    background-color: #98C584;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
    margin-top: 0.5rem;
    @media only screen and (max-width: 768px){
        height: 2rem;
    }
`;

const Wrapper = styled.div`
    background-color: #98C584;
    width: 100%;
`;

const Header = styled.div`
    font-family: 'Lalezar';
    color: #FFC85F;
    -webkit-text-stroke: 0.15rem black;
    font-size: 2.5rem;
    margin-left: 3rem;
    @media only screen and (max-width: 768px){
        -webkit-text-stroke: 0.1rem black;
        font-size: 2rem;
        width: fit-content;
        margin: auto;
        padding-top:5rem;
        padding-bottom:3rem;
    }
    @media only screen and (max-width: 450px){
        text-align:center;
        -webkit-text-stroke: 0.05rem black;
        font-size: 2rem;
        width: fit-content;
        margin: auto;
        padding-top:5rem;
        padding-bottom:1rem;
    }
    @media only screen and (max-width: 350px){
        font-size: 2rem;
    }
`;

const SectAndNames = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content:space-evenly;
    width: 90%;
    height: 60rem;
    margin: auto;
    margin-top: 2rem;
    @media only screen and (max-width: 1129px){
        height: 70rem;
    }
    @media only screen and (max-width: 1024px){
        height: 100rem;
    }
    @media only screen and (max-width: 768px){
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        font-size: 1.2rem;
        height: fit-content;
        margin: auto;
        width: 70%;
    }
    @media only screen and (max-width: 450px){
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        height: fit-content;
        margin-top:2rem;
        width: 70%;
    }  
`;

const Section = styled.div`
    font-family: 'Mogra';
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    @media only screen and (min-width: 769px){
        width: 30%;
        font-size:1rem;
    }
`;

const Name = styled.div`
    font-family: "Comic Sans MS";
    color: black;
    text-transform: none;
`;


const Credits = () => {
    return (
        <CreditsContainer>
            <SlantContainer>
                <Slant></Slant>
                <SlantBorder></SlantBorder>
            </SlantContainer>
            <Wrapper>
                <Header>Staff Who Made This Issue Possible</Header>
                <SectAndNames>
                    {Object.entries(credits).map(([section, key]) => {
                        return(
                            <Section> {section} 
                            <br/>
                            {key.map((person, index) => {
                                return(
                                    <Name key={index}>{person.staff_name}, <i>{person.title}</i></Name>
                                );
                            })}
                            <br/> <br/>
                            </Section>
                        );
                    })}
                </SectAndNames>
            </Wrapper>
        </CreditsContainer>
    );

}

export default Credits