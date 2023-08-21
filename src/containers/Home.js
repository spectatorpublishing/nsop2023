import { React} from 'react';
import styled from 'styled-components';
import Letter from '../containers/Letter';
import breakout from '../components/images/Breakout.png'
import HomeImage from '../components/images/TestImage.png'

const HomeContainer = styled.div`
    /* --dotSize: 0.25rem;
    --bgSize: 1.35rem;
    --bgPosition: calc(var(--bgSize) / 2);
	
	width: 100vw;
	height: 100vh;
	
	background-image: radial-gradient(
      circle at center,
      #3589C7 var(--dotSize),
      #AFE1ED 0
    ), radial-gradient(circle at center, #3589C7 var(--dotSize), #AFE1ED 0);
    background-size: var(--bgSize) var(--bgSize);
    background-position: 0 0, var(--bgPosition) var(--bgPosition); */

    width: 100%;
	height: 100%;

    background-image: radial-gradient(#3589C7 30%, #AFE1ED 20%);
    background-size: .5rem .5rem;

    display: flex;
    
`;

const Photo = styled.div`
`;

const Title = styled.div`
    font-family: 'Lalezar';
    color: #FFC85F;
    -webkit-text-stroke: 0.3rem black;
    font-size: 5.5rem;
    letter-spacing: -0.2rem;
    transform: rotate(5deg);
    margin-top: 5rem;
`;

const Breakout = styled.div`
    width: 30%;
    height: 160%;
    position: absolute;
    top: -1rem;
    right: 5rem;
`;

const TitleWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const Wrapper = styled.div`
    width: 70%;
`;

const Home = () => {

    return (
        <HomeContainer>
            <Photo><img src={HomeImage}></img></Photo>
            <Wrapper>
                <TitleWrapper>
                    <Breakout><img src={breakout} width="100%" height="100%" ></img></Breakout>
                    <Title>Welcome to Columbia!</Title>
                </TitleWrapper>
                <Letter/>
            </Wrapper>
        </HomeContainer>
    );
};

export default Home;