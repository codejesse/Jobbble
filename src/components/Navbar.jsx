import { NavWrapper, LogoWrapper, NavItemsWrapper, NavButtonWrapper, NavButton, NavLinks } from "../Styles/Navbar-styles";
import NavLogo from "../assets/Jobbble.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavWrapper>
            <LogoWrapper>
                <img src={NavLogo} alt="nav-logo" />
            </LogoWrapper>
            <NavItemsWrapper>
                <NavLinks>Categories</NavLinks>
                <NavLinks>Community</NavLinks>
                <NavLinks>Job seekers</NavLinks>
                <NavLinks>Employers</NavLinks>
            </NavItemsWrapper>
            <NavButtonWrapper>
                <Link to="/application">
                    <NavButton className='blob red'>Find a job</NavButton>
                </Link>
            </NavButtonWrapper>
        </NavWrapper>
    );
}

export default Navbar;