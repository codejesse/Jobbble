import styled from 'styled-components';
import '../App.css';
import Fade from 'react-reveal/Fade';

const AboutWrapper = styled.div`
   display: flex;
   margin: 4rem;
   margin-top: 8rem;
   @media (max-width: 768px) {
       margin: 1rem;
       margin-bottom: 5rem;
   }
`;

const SolutionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsWrapper = styled.div`
   display: flex;
   flex-direction: row;
   @media (max-width: 768px) {
      flex-direction: column;
  }
`;

const DetailsHeader = styled.h1`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 800;
   width: 606px;
   height: 125px;
   font-size: 70px;
   line-height: 135px;
   background: linear-gradient(180deg, #FFF8EF 0%, #FF0000 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-align: center;
   @media (max-width: 768px) {
       margin: auto;
   }
`;

const DetailsPara = styled.p`
  text-align: left;
  margin-left: 5rem;
  margin-top: -3rem;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #000000;
  @media (max-width: 768px) {
      text-align: center;
      margin: 1rem;

  }
`;


function About() {
    return (
        <AboutWrapper>
            <DetailsWrapper>
                <Fade left><img className='general-about' src='About1.png' alt='about1' /></Fade>
                <SolutionWrapper>
                    <Fade bottom><DetailsHeader>Find that job</DetailsHeader></Fade>
                    <Fade bottom><DetailsPara>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. At non nec sit viverra duis
                        tortor non. Est fringilla a volutpat tortor
                        suspendisse malesuada.</DetailsPara></Fade>
                </SolutionWrapper>
            </DetailsWrapper>
        </AboutWrapper>
    )
}
export default About;