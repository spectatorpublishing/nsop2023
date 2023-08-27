import React from 'react';
import styled from 'styled-components';

const LetterWrapper = styled.div`
    font-family: 'Comic Neue'
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
        margin-top: 2rem;
        padding-bottom: 1rem;
    }

    @media only screen and (max-width: 767px) {
        width: 63%;
        margin-left: 1rem;
        margin-top: 3rem;
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
    font-family: 'Comic Neue'
    
    @media only screen and (max-width: 767px) {
        font-size: 0.9rem;
    }
`;

const Signatures = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin-left: auto;
    margin-top:4rem;

    @media only screen and (max-width: 767px) {
        width: 90%;
        margin-right: 1.5rem;
    }
`;

const Signature = styled.div`
    .name {
        color: black;
        font-family: 'Nothing You Could Do';

        @media only screen and (max-width: 767px) {
            font-size: 0.9rem;
            text-align: center;
        }
    }
    .title {
        color: black;
        font-family: 'Lalezar';

        @media only screen and (max-width: 767px) {
            font-size: 0.9rem;
        }
    }
`;

const Letter = () => {
    return (
        <LetterWrapper>
            <Title>Letter from Editor</Title>
            <Text>
                <p style={{margin: 0}}>
                Dear class of 2027, <br/><br/>
                Welcome to Columbia—we are so excited to have you! You have a busy week ahead of you, and as you settle into your new home and get acquainted with campus, you probably have some lingering questions about what the years ahead will look like. Inside this special issue—our first of the year—you will find everything we at Spectator think every first-year student should know. 
                </p>
                <p style={{margin: 0}}>
                <br/>
                <b>ABOUT SPECTATOR</b>
                <br/><br/>
                Spectator is a financially independent, nonprofit, student-run news media organization with a 147-year tradition as a living archive documenting the Columbia, Morningside Heights, and West Harlem communities through in-depth, well-reported stories that hold institutional power to account. </p>
                <br/>
                <p style={{margin: 0}}>Central to our mission is helping our audience make the most of their Columbia experience through our award-winning journalism. Through Spectator’s publications and products, we aim to identify and directly address the needs of students, faculty, staff, and neighborhood 
                residents. Across all of our departments—which consist of hundreds of undergraduate reporters, multimedia journalists, designers, analysts, salespeople, engineers, and more—we work to continuously improve your college experience within and beyond the campus gates. </p>
                <br/>
                <b>JOINING SPECTATOR AND WORK-STUDY</b>
                <br/><br/>
                <p style={{margin: 0}}>Joining Spec is one of the best ways to kick off your four years at Columbia. When you become a member of the Spec family, you step into a community of sharp and passionate students who constantly push themselves, the people around them, and the community they serve to be better. Along the way, you’ll build lifelong connections and friendships.</p>
                <br/>
                <p style={{margin: 0}}>Working on Spec is an unmatched opportunity to be part of a fully-independent organization that has a direct impact on the community of which you are now a member. Through the work they do for Spectator’s journalism, business, and tech teams, our staff members grow as leaders, thinkers, and people—gaining skills that apply to practically any career path they choose to pursue.</p>
                <br/>
                <p style={{margin: 0}}>As such, we are committed to ensuring that anyone who wants to join Spec can, no matter your experience or background. That is why we are proud to offer one of the best work-study jobs on campus. If you qualify for work-study opportunities, even as a trainee, you can apply to our work-study program right away. You do not need any prior experience to join any of Spec’s departments, 
                so be sure to come to an open house and check out joinspec.com to learn more about the various ways you can get involved. If you have any questions, don’t hesitate to reach out to us directly at editor@columbiaspectator.com.</p>
            </Text>
            <Signatures>
                <Signature><div className='name'>Irie Sentner</div><div className='title'>Editor in Chief</div></Signature>
                <Signature><div className='name'>Andrew Park</div><div className='title'>Managing Editor</div></Signature>
                <Signature><div className='name'>Tyler Shern</div><div className='title'>Publisher</div></Signature>
            </Signatures>
        </LetterWrapper>
    );    
};

export default Letter;