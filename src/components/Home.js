import styled from 'styled-components'
import { Link } from "react-router-dom";
import Application from './Application';
import Fade from 'react-reveal/Fade';

const HeaderWrapper = styled.div`
   @media (max-width: 600px) {
       margin: auto;
       margin-top: 5rem;
       margin-bottom: 5rem;
   }
`;

const HeaderImage = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin: auto;
   margin-top: 3rem;
   text-align: center;
   color: white;
   width: 100%;
   height: auto;
   margin: auto;
   border-radius: 30px;
   @media (max-width: 768px) {
       width: 100%;
   }
`;

const HeaderText = styled.div`
   padding-top: 12rem;
   width: 100%;
   position: absolute;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 800;
   font-size: 6vw;
   @media (max-width: 768px) {
       margin-top: -10rem;
   }
`;

const HeaderButton = styled.button`
   position: absolute;
   width: 302px;
   height: 92px;
   top: 505px; 
   background: #FF0000;
   border: none;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 800;
   font-size: 23px;
   color: #FFFFFF;
   cursor: pointer;
   @media (max-width: 768px) {
       font-size: 10px;
       width: 135px;
       height: 60px;
       margin-top: -10rem;
   }
`;


function Home() {
    return (
        <HeaderWrapper>
            <HeaderImage>
                <img className='header' src='Header.png' alt='header-img' />
                <HeaderText><Fade bottom>Sapa is not an option</Fade></HeaderText>
                    {/* <Link style={{ display: "flex", justifyContent: "center", border: "1px solid black"}} to="/Application"> */}
                        <HeaderButton>Find your dream job</HeaderButton>
                    {/* </Link> */}
            </HeaderImage>
        </HeaderWrapper>
    )
}
export default Home;