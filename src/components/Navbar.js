import styled from 'styled-components';
import { Link } from "react-router-dom";
import Application from './Application';
import Fade from 'react-reveal/Fade';

const NavWrapper = styled.div`
   display: flex;
   margin: 2rem;
   @media (max-width: 600px) {
       margin: 1.2rem;
   }
`;

const LogoWrapper = styled.div`
   padding: 0.69rem;
`;

const LinksWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin: auto;
`;

const List = styled.div`
   & a{
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: black;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
   }
   & a:hover{
       text-decoration: underline;
   }
   @media (max-width: 768px) {
       display: none;
   }
   
`;

const NavButtonWrapper = styled.div`
    display: flex;
    justify-content: right;
`;

const NavButton = styled.button`
    width: 178px;
    height: 71px;
    background: #FF0000;
    color: white;
    border: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700; 
    font-size: 24px;
    cursor: pointer;
`;

function Navbar() {

    const removeList = (props) => {
        <List style={{display: props.data}}/>
    }

    return (
        <NavWrapper>
            <LogoWrapper>
            <Link to={Application}><img src='Jobbble.png' alt='logo' /></Link>
            </LogoWrapper>
            <LinksWrapper>
                <Fade bottom><List><a href="default.asp">Categories</a></List></Fade>
                <Fade bottom><List><a href="news.asp">Community</a></List></Fade>
                <Fade bottom><List><a href="contact.asp">Job seekers</a></List></Fade>
                <Fade bottom><List><a href="about.asp">Employers</a></List></Fade>
            </LinksWrapper>
            <NavButtonWrapper>
            <Link to="/Application"><NavButton className='blob red'>Find a job</NavButton></Link>
            </NavButtonWrapper>
        </NavWrapper>
    )
}
export default Navbar;