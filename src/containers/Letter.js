import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    width: 87%;
    background-color: white;
    padding: 2rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: black;
`;

const Title = styled.div`
    font-family: 'Mogra';
    font-size: 2rem;
`;

const Text = styled.div`
    font-family: "Comic Sans MS";
    
`;

const Signatures = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    margin-left: auto;
`;

const Signature = styled.div`
    .name {
        color: black;
        font-family: 'Nothing You Could Do';
    }
    .title {
        color: black;
        font-family: 'Lalezar';
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