import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


const DescriptionWrapper = styled.div`
   display: flex;
   flex-direction: row;
   background: #FFF8EF;
   padding: 1.5rem;
   @media (max-width: 768px) {
       flex-direction: column-reverse;
       padding: 5rem;
   }
`;

const DescDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: -1.5rem;
`;


const DescHeader = styled.h1`
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

const DescriptionPara = styled.p`
  margin-left: 4rem;
  margin-top: -3rem;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  width: 80%;
  color: #000000;
  @media (max-width: 768px) {
      margin: auto;
      text-align: center;
      width: auto;
  }
`;


function Description() {
    return (
        <DescriptionWrapper>
            <DescDetails>
                <Fade bottom><DescHeader>Remote work</DescHeader></Fade>
                <Fade bottom><DescriptionPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At non nec sit viverra duis tortor non. Est fringilla a volutpat tortor suspendisse malesuada.</DescriptionPara></Fade>
            </DescDetails>
                <Fade right><img className='general-about' src='About2.png' alt='about-2' /></Fade>
        </DescriptionWrapper>
    )
}
export default Description;