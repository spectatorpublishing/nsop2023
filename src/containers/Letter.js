import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    width: 87%;
    background-color: white;
    padding: 2rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: black;

    @media only screen and (max-width: 1024px) and (min-width: 1300px){
        width: 70%;
    }

    @media only screen and (max-width: 1023px){
        width: 70%;
        margin-left: 1rem;
        margin-top: -4rem;
        margin-bottom: 17rem;
        padding-bottom: 1rem;
    }

    @media only screen and (max-width: 767px) {
        width: 63%;
        margin-left: 1rem;
        margin-top: -4rem;
        margin-bottom: 17rem;
        padding-bottom: 1rem;
    }
`;

const Title = styled.div`
    font-family: 'Mogra';
    font-size: 2rem;

    @media only screen and (max-width: 767px) {
        font-size: 1.2rem;
    }
`;

const Text = styled.div`
    font-family: "Comic Sans MS";
    
    @media only screen and (max-width: 767px) {
        font-size: 0.75rem;
    }
`;

const Signatures = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin-left: auto;

    @media only screen and (max-width: 767px) {
        width: 90%;
        margin-top: 1rem;
        margin-right: -1.5rem;
    }
`;

const Signature = styled.div`
    .name {
        color: black;
        font-family: 'Nothing You Could Do';

        @media only screen and (max-width: 767px) {
            font-size: 0.75rem;
            text-align: center;
        }
    }
    .title {
        color: black;
        font-family: 'Lalezar';

        @media only screen and (max-width: 767px) {
            font-size: 0.75rem;
        }
    }
`;

const Letter = () => {
    return (
        <LetterWrapper>
            <Title>Letter from Editor</Title>
            <Text>
                <p style={{margin: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p style={{margin: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p style={{margin: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p style={{margin: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Text>
            <Signatures>
                <Signature><div className='name'>First Last</div><div className='title'>Editor in Chief</div></Signature>
                <Signature><div className='name'>First Last</div><div className='title'>Managing Editor</div></Signature>
            </Signatures>
        </LetterWrapper>
    );    
};

export default Letter;