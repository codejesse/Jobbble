import styled from "styled-components";

export const NavWrapper = styled.div`
    display: flex;
    width: 90%;
    height: 80px;
    margin: auto;
    margin-top: 40px;
    flex: 1 1 0;
    @media (max-width: 768px) {
        margin: 10px;
    }
`;

export const LogoWrapper = styled.div`
    margin: auto;
    @media (max-width: 600px) {
    width: fit-content;
    }
    & img {
     @media (max-width: 600px) {
    width: 50%;
     }
    }
    margin: auto;
`;

export const NavItemsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    flex-grow: 1;
    & li {
        text-decoration: none;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLinks = styled.li`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400; 
    font-size: 15px;
    text-decoration: none;
    & li {
        text-decoration: none;
    }
`;

export const NavButtonWrapper = styled.div`
    display: flex;
    margin: auto;
`;

export const NavButton = styled.button`
    width: 178px;
    height: 71px;
    background: #FF0000;
    color: white;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700; 
    font-size: 24px;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 100%;
        height: 60px;
        font-size: medium;
        padding: 21px;
    }
`;