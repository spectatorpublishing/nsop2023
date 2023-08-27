import React from 'react';
import styled from 'styled-components'
import breakout from '../components/images/SectionBreakout.png'
import Navbar from '../components/Navbar';
import bubble0 from '../components/images/Bubble0.png'
import bubble1 from '../components/images/Bubble1.png'
import bubble2 from '../components/images/Bubble2.png'
import bubble3 from '../components/images/Bubble3.png'

const SectionContainer = styled.div`
    width: 100%;
	  height: 100%;
    background-image: radial-gradient(#CFD8DE 10%, #FFFFFF 40%);
    background-size: 0.5rem 0.5rem;
    padding-bottom: 5rem;
`;

const Title = styled.span`
    z-index:100;
    font-family: 'Lalezar';
    color: #BBE2FF;
    -webkit-text-stroke: 0.3rem black;
    font-size: 5rem;
    letter-spacing: -0.2rem;
    margin-top: 5rem;
    right:8rem;
    position:absolute;


    @media only screen and (max-width: 1203px) {
        font-size: 4.5rem;
        -webkit-text-stroke: 0.25rem black;
        letter-spacing: -0.1rem;
        padding-left: 2rem;
    }

    @media only screen and (max-width: 1023px) {
        font-size: 4.5rem;
        -webkit-text-stroke: 0.25rem black;
        letter-spacing: -0.1rem;
        margin-top: 0rem;
        text-align: center;
    }

    @media only screen and (max-width: 875px) {
        font-size: 3.5rem;
        -webkit-text-stroke: 0.2rem black;
        letter-spacing: -0.1rem;
        margin-top: 4rem;
        text-align: center;
        right:5rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 3.5rem;
        right:4rem;
    }

    @media only screen and (max-width: 450px) {
        font-size: 2.75rem;
        transform: rotate(0deg);
        -webkit-text-stroke: 0.15rem black;
        letter-spacing: -0.1rem;
        right:4.5rem;
    }
    @media only screen and (max-width: 375px) {
        font-size: 2.25rem;
        transform: rotate(0deg);
        -webkit-text-stroke: 0.15rem black;
        letter-spacing: -0.1rem;
        right:4.5rem;
    }
`;

const Breakout = styled.img`
    width: 15rem;
    height: 15rem; 
    right:3rem;
    top: 1rem;
    position:absolute;
    @media only screen and (max-width: 875px) {
      top:2rem;
      right:2rem;
      width: 10rem;
      height: 10rem; 
    }
    @media only screen and (max-width: 450px) {
      top:3rem;
      right:1rem;
      width: 8rem;
      height: 8rem; 
    }
    @media only screen and (max-width: 375px) {
      top:4rem;
      right:1rem;
      width: 6rem;
      height: 6rem; 
    }
`;

const ArticleImg = styled.img`
  width:30rem;
  height:auto;
  border-radius:10px;
  @media only screen and (max-width: 1300px) {
    width:25rem;
  }
  @media only screen and (max-width: 875px) {
      display:none;
    }
`

const ArticleContainer = styled.div`
  z-index:0;
  padding:1rem 8rem;
  display:flex;
  flex-direction: ${props => props.direction};
  @media only screen and (max-width: 1300px) {
    padding:1rem 2rem;
  }
  @media only screen and (max-width: 875px) {
    display:none;
  }
`
const BubbleContainer = styled.div`
  z-index:2;
  padding-left: '1rem';
  font-family: 'Comic Neue'
  font-size:1rem;
  margin-top:13rem;
  width:55%;
`

const ArticleTitle = styled.h1`
  font-size:1rem;
  width:25rem;
  padding-left:${props => props.bubbleNum == 0 ? '0rem' : 
                          props.bubbleNum == 1 ? '15rem' :
                          props.bubbleNum == 2 ? '0rem' :
                          '5rem'};      
  @media only screen and (max-width: 1300px) {
    width:21rem;
    padding-left:${props => props.bubbleNum == 0 ? '0rem' : 
                          props.bubbleNum == 1 ? '10rem' :
                          props.bubbleNum == 2 ? '0rem' :
                          '10rem'}; 
  } 
  @media only screen and (max-width: 1024px) {
    font-size:0.925rem;
    padding-left:${props => props.bubbleNum == 0 ? '0rem' : 
                          props.bubbleNum == 1 ? '10rem' :
                          props.bubbleNum == 2 ? '0rem' :
                          '11.5rem'}; 
  }
  @media only screen and (max-width: 875px) {
    display:none;
  }      
`

const Byline = styled.p`
  font-size:0.75rem;
  width: 15rem;
  padding-left:${props => props.bubbleNum == 0 ? '15rem' : 
                          props.bubbleNum == 1 ? '32rem' :
                          props.bubbleNum == 2 ? '10rem' :
                          '20rem'}; 
  @media only screen and (max-width: 1300px) {
    padding-left:${props => props.bubbleNum == 0 ? '9rem' : 
                          props.bubbleNum == 1 ? '25rem' :
                          props.bubbleNum == 2 ? '5rem' :
                          '18rem'}; 
  } 
  @media only screen and (max-width: 1024px) {
    padding-left:${props => props.bubbleNum == 0 ? '8rem' : 
                          props.bubbleNum == 1 ? '22rem' :
                          props.bubbleNum == 2 ? '8rem' :
                          '22rem'};                        
  }
  @media only screen and (max-width: 875px) {
      display:none;
    }                   
`

const Bubble = styled.img`
  z-index:1;
  position:absolute;
  margin-top: ${props => props.bubbleNum == 2 ? '11rem' : '10rem'};
  left:${props => props.bubbleNum == 0 ? '20rem' : 
                    props.bubbleNum == 1 ? '18rem' :
                    props.bubbleNum == 2 ? '32rem' :
                    '0rem'};                 
  width:${props => props.bubbleNum == 0 ? '52.5rem' : 
                    props.bubbleNum == 1 ? '42rem' :
                    props.bubbleNum == 2 ? '40rem' :
                    '48rem'}; 
  height:${props => props.bubbleNum == 0 ? '15rem' : 
                    props.bubbleNum == 1 ? '15rem' :
                    props.bubbleNum == 2 ? '15rem' :
                    '20rem'}; 

  @media only screen and (max-width: 1300px) {
    left:${props => props.bubbleNum == 0 ? '10rem' : 
                    props.bubbleNum == 1 ? '8rem' :
                    props.bubbleNum == 2 ? '22rem' :
                    '0rem'};                 
    width:${props => props.bubbleNum == 0 ? '45rem' : 
                      props.bubbleNum == 1 ? '35rem' :
                      props.bubbleNum == 2 ? '32rem' :
                      '40rem'}; 
  }
  @media only screen and (max-width: 1024px) {
    left:${props => props.bubbleNum == 0 ? '13rem' : 
                    props.bubbleNum == 1 ? '3rem' :
                    props.bubbleNum == 2 ? '22rem' :
                    '0rem'};                 
    width:${props => props.bubbleNum == 0 ? '40rem' : 
                      props.bubbleNum == 1 ? '32rem' :
                      props.bubbleNum == 2 ? '29rem' :
                      '32rem'};
  } 
  @media only screen and (max-width: 875px) {
      display:none;
    }            
`

const SectionItems = styled.div`
  margin-top: 15rem;
  width: 80rem;

  @media only screen and (max-width: 1300px) {
    width:55rem;
  }
  @media only screen and (max-width: 1024px) {
    width:45rem;
  }
  @media only screen and (max-width: 875px) {
    display:none;
  }
`
const InnerSection = styled.div`
    margin-top: 5rem;
    @media only screen and (max-width: 875px) {
      
    }
  `

const Section = ({id, header, articles}) => {
  const selectImage = (index) => {
    switch(index%4) {
      case 0:
        return bubble0;
      case 1:
        return bubble1;
      case 2:
        return bubble2;
      case 3:
        return bubble3;
    }
  }

  const selectDirection = (index) => {
    switch(index%2) {
      case 0:
        return "row";
      case 1:
        return "row-reverse";
    }
  }
  

  return (
    <SectionContainer>
      <Navbar className = 'section'/>
      <div>
        <Title>{header}</Title>
        <Breakout src={breakout}/>
      </div>
      <SectionItems>
        {articles.map((article,index)=>{
          return(
          <InnerSection bubbleNum = {index}>
            <Bubble src={selectImage(index)} bubbleNum = {index%4}/>
            <ArticleContainer key = {index} direction = {selectDirection(index)}>
              <ArticleImg src = {article.image_url} />
              <BubbleContainer>
                <ArticleTitle bubbleNum = {index%4}>
                  {article.article_title}
                </ArticleTitle>
                <Byline bubbleNum = {index%4}>By: {article.article_authors}</Byline>
              </BubbleContainer>
            </ArticleContainer>
        </InnerSection>
          )
        })}
      </SectionItems>
      <SectionItemsMobile>
        {articles.map((article,index)=>{
          return(
          <InnerSectionMobile bubbleNum = {index}>
            <BubbleMobile src={selectImage(index)} bubbleNum = {index%4}/>
            <ArticleContainerMobile key = {index} direction = {selectDirection(index)}>
              <ArticleImgMobile src = {article.image_url} />
              <BubbleContainerMobile>
                <ArticleTitleMobile bubbleNum = {index%4}>
                  {article.article_title}
                </ArticleTitleMobile>
                <BylineMobile bubbleNum = {index%4}>By: {article.article_authors}</BylineMobile>
              </BubbleContainerMobile>
            </ArticleContainerMobile>
        </InnerSectionMobile>
          )
        })}
      </SectionItemsMobile>      
    </SectionContainer>
  )
}

export default Section

const SectionItemsMobile = styled.div`
 margin-top:6rem;
 padding-bottom:10rem;
 padding-left:1rem;
  @media only screen and (min-width: 875px) {
    display:none;
  }
`
const InnerSectionMobile = styled.div`
  @media only screen and (min-width: 875px) {
    display:none;
  }
`
const ArticleContainerMobile = styled.div`
font-family: "Comic Sans MS";
  position:relative;
  top:-2rem;
  @media only screen and (min-width: 875px) {
    display:none;
  }
`
const BubbleContainerMobile = styled.div`
  @media only screen and (min-width: 875px) {
    display:none;
  }
`

const BylineMobile = styled.div`
  z-index:100;
  font-size:0.85rem;
  width:50%;
  position:absolute;
  top: ${props => props.bubbleNum === 0 ? "280px" : 
                      props.bubbleNum === 1 ? "230px" : 
                      props.bubbleNum === 2 ? "240px" : "260px"};
  left: ${props => props.bubbleNum === 0 ? "190px" : 
                      props.bubbleNum === 1 ? "100px" : 
                      props.bubbleNum === 2 ? "120px" : "130px"};
  @media only screen and (max-width: 550px) {
    top: ${props => props.bubbleNum === 0 ? "225px" : 
                      props.bubbleNum === 1 ? "220px" : 
                      props.bubbleNum === 2 ? "200px" : "200px"};
    left: ${props => props.bubbleNum === 0 ? "160px" : 
                      props.bubbleNum === 1 ? "100px" : 
                      props.bubbleNum === 2 ? "100px" : "90px"};
  } 
  @media only screen and (min-width: 875px) {
    display:none;
  }
`

const ArticleTitleMobile = styled.h1`
  z-index:100;
  font-size:0.85rem;
  width:${props => props.bubbleNum === 2 ? "60%" : "48%"};
  position:absolute;
  top: ${props => props.bubbleNum === 0 ? "130px" : 
                      props.bubbleNum === 1 ? "100px" : 
                      props.bubbleNum === 2 ? "100px" : "120px"};
  left: ${props => props.bubbleNum === 0 ? "150px" : 
                      props.bubbleNum === 1 ? "60px" : 
                      props.bubbleNum === 2 ? "80px" : "120px"};
  @media only screen and (min-width: 550px) {
    width:18rem;
    top: ${props => props.bubbleNum === 0 ? "180px" : 
                      props.bubbleNum === 1 ? "140px" : 
                      props.bubbleNum === 2 ? "140px" : "180px"};
    left: ${props => props.bubbleNum === 0 ? "180px" : 
                      props.bubbleNum === 1 ? "80px" : 
                      props.bubbleNum === 2 ? "80px" : "140px"};
  }                    
  @media only screen and (min-width: 875px) {
    display:none;
  }
  @media only screen and (max-width: 425px) {
    top: ${props => props.bubbleNum === 0 ? "130px" : 
                      props.bubbleNum === 1 ? "120px" : 
                      props.bubbleNum === 2 ? "100px" : "140px"};
    left: ${props => props.bubbleNum === 0 ? "120px" : 
                      props.bubbleNum === 1 ? "50px" : 
                      props.bubbleNum === 2 ? "60px" : "90px"};
  }
`
const ArticleImgMobile = styled.img`
  position:relative;
  top:-8rem;
  width:90%;
  border-radius:10px;
  @media only screen and (min-width: 550px) {
    width:30rem;
  }
  @media only screen and (min-width: 875px) {
    display:none;
  }
`
const BubbleMobile = styled.img`
  width:90%;
  height: ${props => props.bubbleNum == 3 ? "23rem" : "18rem"};
  position:relative;
  top:${props => props.bubbleNum == 3 ? "25rem" : "20rem"};
  z-index:100;
  @media only screen and (min-width: 550px) {
    width:33rem;
    top:${props => props.bubbleNum == 3 ? "28rem" : "22rem"};
  }
  @media only screen and (min-width: 875px) {
    display:none;
  }
`