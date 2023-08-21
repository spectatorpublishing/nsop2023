import { React} from 'react';
import styled from 'styled-components';
import Letter from '../containers/Letter';
import breakout from '../components/images/Breakout.png'

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

    width: 100vw;
	height: 100vh;

    background-image: radial-gradient(#3589C7 30%, #AFE1ED 20%);
    background-size: .5rem .5rem;
`;

const Photo = styled.div`
`;

const Title = styled.div`
    font-family: 'Lalezar';
    color: #FFC85F;
    -webkit-text-stroke: 0.3rem black;
    font-size: 6rem;
    letter-spacing: -0.2rem;
    transform: rotate(5deg);
`;

const Breakout = styled.div`
    width: 30%;
    height: 150%;
    position: absolute;
    right: -3rem;
`;

const Wrapper = styled.div`
    position: relative;
    width: 60%;
`;

const Home = () => {

    return (
        <HomeContainer>
            <Photo><img></img></Photo>

            <Wrapper>
                <Breakout><img src={breakout} width="100%" height="100%" ></img></Breakout>
                <Title>Welcome to Columbia!</Title>
            </Wrapper>
            <Letter/>
        </HomeContainer>
    );
};

export default Home;