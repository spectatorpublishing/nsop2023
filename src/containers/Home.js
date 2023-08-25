import { React} from 'react';
import styled from 'styled-components';
import Letter from '../containers/Letter';
import Credits from '../containers/Credits';
import breakout from '../components/images/Breakout.png'
import HomeImage from '../components/images/TestImage.png'
import Navbar from '../components/Navbar';

const HomeContainer = styled.div`
    width: 100%;
	height: 100%;
    background-image: radial-gradient(#3589C7 40%, #AFE1ED 50%);
    background-size: .5rem .5rem;
`;

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 3rem;
    width: 90%;
    margin-left: 2rem;

    @media only screen and (max-width: 1023px) {
        display:none;
    }

    @media only screen and (max-width: 767px) {
        display:none;
    }
`;

const MobileTopWrapper = styled.div`
    padding-top: 3rem;
    @media only screen and (min-width: 1024px) {
        display:none;
    }
`;

const Photo = styled.div`
    width: 40%;
    height: 100%;
    margin-left:1rem;
    @media only screen and (max-width: 1024px){
        width:60%;
        margin-top:2rem;
    }

    @media only screen and (max-width: 768px){
        margin-top: 2rem;
        width: 80%;
    }

    @media only screen and (max-width: 425px){
        margin: 0rem;
        margin-left: 1rem;
        width: 80%;
    }
`;

const Title = styled.div`
    font-family: 'Lalezar';
    color: #FFC85F;
    -webkit-text-stroke: 0.3rem black;
    font-size: 5rem;
    letter-spacing: -0.2rem;
    transform: rotate(5deg);
    margin-top: 5rem;

    @media only screen and (max-width: 1382px) {
        font-size: 4rem;
        -webkit-text-stroke: 0.2rem black;
        padding-left: 2rem;
    }

    @media only screen and (max-width: 1203px) {
        font-size: 3rem;
        -webkit-text-stroke: 0.18rem black;
        letter-spacing: -0.1rem;
        padding-left: 2rem;
    }

    @media only screen and (max-width: 1023px) {
        font-size: 4.5rem;
        transform: rotate(0deg);
        -webkit-text-stroke: 0.2rem black;
        letter-spacing: -0.1rem;
        margin-top: 0rem;
        text-align: center;
    }

    @media only screen and (max-width: 767px) {
        font-size: 3rem;
        transform: rotate(0deg);
        -webkit-text-stroke: 0.1rem black;
        letter-spacing: -0.1rem;
        margin-top: 0rem;
        text-align: center;
    }

    @media only screen and (max-width: 425px) {
        font-size: 2.2rem;
        transform: rotate(0deg);
        -webkit-text-stroke: 0.1rem black;
        letter-spacing: -0.1rem;
    }
`;

const Breakout = styled.div`
    width: 43%;
    height: 190%;
    position: absolute;
    top: -2rem;
    right: -5rem;

    @media only screen and (max-width: 1382px) {
        right: 0rem;
    }

    @media only screen and (max-width: 1072px) {
        top: -1.5rem;
        right: -1rem;
    }

    @media only screen and (max-width: 1023px) {
        width: 25%;
        height: 130%;
        top: -1.5rem;
        right: 0rem;
    }

    @media only screen and (max-width: 767px) {
        width: 40%;
        height: 160%;
        top: -1rem;
        right: -1rem;
    }
    @media only screen and (max-width: 600px) {
        width: 8rem;
        height: 8rem;
        top: -2rem;
        right: 0rem;
    }
    @media only screen and (max-width: 425px) {
        width: 8rem;
        height: 8rem;
        top: -2rem;
        right: 0rem;
    }
`;

const TitleWrapper = styled.div`
    position: relative;
    width: fit-content;

    @media only screen and (max-width: 1023px) {
        margin: auto;
    }
`;

const Wrapper = styled.div`
    width: 55%;
`;

const JoinSpec = styled.img`
    display:block;
    margin:auto;
    margin-top:5rem;
    width:60%;
    @media only screen and (max-width: 1024px) {
        display:none;
    }
`

const JoinSpecMobile = styled.img`
    display:block;
    position:relative;
    margin:auto;
    width:90%;
    margin-top:5rem;
    @media only screen and (max-width: 767px) {
        margin-top:0rem;
        top:-10rem;
    }
    @media only screen and (min-width: 1023px) {
        display:none;
    }
`

const Home = () => {

    return (
        <div>
        <Navbar className = 'desktop'/>
        <HomeContainer>
            <TopWrapper>
                    <Photo><img src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OFLS3CGM6BHPXMRW5DASIFS55A.png" style={{width:"100%", height: "100%"}}></img></Photo>
                <Wrapper>
                    <TitleWrapper>
                        <Breakout><img src={breakout} width="100%" height="100%" ></img></Breakout>
                        <Title>Welcome to Columbia!</Title>
                    </TitleWrapper>
                    <Letter/>
                </Wrapper>
            </TopWrapper>
            <JoinSpec src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JAIANPQPBRCS5KZ76FBCKTGLGI.png"></JoinSpec>
            <MobileTopWrapper>
                <TitleWrapper>
                    <Breakout><img src={breakout} width="100%" height="100%" ></img></Breakout>
                    <Title>Welcome to Columbia!</Title>
                </TitleWrapper>
                <Photo><img style={{width:"100%", height: "100%"}} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/OFLS3CGM6BHPXMRW5DASIFS55A.png"></img></Photo>
                <Letter/>
                <JoinSpecMobile src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JAIANPQPBRCS5KZ76FBCKTGLGI.png"></JoinSpecMobile>
            </MobileTopWrapper>
            <Credits/>
        </HomeContainer>
        </div>
    );
};

export default Home;