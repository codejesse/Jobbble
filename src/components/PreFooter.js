import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const PreFooterWrapper = styled.div`
   display: flex;
   padding-top: 6rem;
`;

const PreFooterCard = styled.div`
   padding-left: 1rem;
   padding-right: 1rem;
   display: flex;
   margin: auto;
   width: 85%;
   height: auto;
   border-radius: 40px;
   background: #FFF8EF;
   @media (max-width: 768px) {
       display: flex;
       flex-direction: column-reverse;
   }
`;

const ImagePostion = styled.div`
  display: flex;
  justify-content: left;
  @media (max-width: 768px) {
      justify-content: center;
  }
`;

const PreFooterDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding-top: 3.5rem;
`;

const Header = styled.h1`
   margin: auto;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 800;
   width: 606px;
   height: 125px;
   font-size: 68px;
   line-height: 135px;
   background: linear-gradient(180deg, #FFF8EF 0%, #FF0000 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-align: center;
   @media (max-width: 768px) {
       
   }
`;

const Para = styled.p`
  text-align: center;
  margin-top: -2rem;
  margin-left: 1.2rem;
  padding: 3rem;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #000000;
  @media (max-width: 768px) {
      margin: auto;
  }
`;

const Button = styled.button`
   margin: auto;
   margin-top: -3.5rem;
   width: 302px;
   height: 92px;
   background: #FF0000;
   border: none;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 800;
   font-size: 30px;
   color: #FFFFFF;
   cursor: pointer;
   @media (max-width: 768px) {
      margin: auto;
  }
`;

function PreFooter() {
    return (
        <PreFooterWrapper>
            <PreFooterCard>
                <ImagePostion>
                    <Fade bottom><img src='Prefooter.png' alt='prefooter' /></Fade>
                </ImagePostion>
                <PreFooterDetails>
                    <Fade bottom><Header>Do what you love</Header></Fade>
                    <Fade bottom><Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At non nec sit viverra duis
                    tortor non. Est fringilla a volutpat tortor suspendisse malesuada.</Para></Fade>
                    <Button>Get Started</Button>
                </PreFooterDetails>
            </PreFooterCard>
        </PreFooterWrapper>
    )
}
export default PreFooter;