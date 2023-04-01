import { NavWrapper, LogoWrapper, NavItemsWrapper, NavButtonWrapper, NavButton, NavLinks } from "../Styles/Navbar-styles";
import NavLogo from "../assets/Jobbble.png"

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
                <NavButton className='blob red'>Find a job</NavButton>
            </NavButtonWrapper>
        </NavWrapper>
    );
}

export default Navbar;