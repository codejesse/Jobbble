import styled from 'styled-components';

const FooterWrapper = styled.div`
   margin-top: 12rem;
   width: 100%;
   height: 80vh;
   background: #FFF8EF;
   @media (max-width: 768px) {
       width: 100%;
   }
`;

const PlaceLogo = styled.div`
   display: flex;
   justify-content: center;
   padding: 8rem;
`;

function Footer() {
    return (
        <FooterWrapper>
            <PlaceLogo>
                <img src='Jobbble.png' alt='logo' />
            </PlaceLogo>
        </FooterWrapper>
    )
}
export default Footer;