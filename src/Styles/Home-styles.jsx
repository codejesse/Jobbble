import styled from "styled-components";

export const HomwWrapper = styled.div`
    margin-top: 30px;
`;

export const HeroWrapper = styled.div`
    display: flex;
`;

export const HeroImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 90%;
    & img {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const HeaderText = styled.div`
    margin-top: 12rem;
    margin-left: 12rem;
    width: fit-content;
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 6vw;
    color: white;
    @media (max-width: 768px) {
        margin: auto;
        margin-top: 5rem;
        margin-left: 5rem;
   }
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderBtn = styled.button`
    position: absolute;
   width: 302px;
   height: 92px;
   top: 505px;
   background: #FF0000;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-style: normal;
   font-weight: 800;
   font-size: 23px;
   color: #FFFFFF;
   cursor: pointer;
   @media (max-width: 768px) {
       font-size: 10px;
       width: 135px;
       height: 60px;
       top: 400px;
       margin-top: -10rem;
   }
`;

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px;
    flex: 1 1 auto;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 20px;
    }
`;

export const AboutImageWrapper = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    & img {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AboutDesc = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    width: 50%;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AboutHeader = styled.h1`
    font-family: 'Poppins', sans-serif;
   font-style: normal;
   font-weight: 800;
   font-size: 60px;
   background: linear-gradient(180deg, #FFF8EF 0%, #FF0000 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-align: left;
   @media (max-width: 768px) {
        font-size: 50px;
        text-align: center;
    }
`;

export const AboutPara = styled.p`
    text-align: left;
    margin-top: -2rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #000000;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const AboutTwo = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin: 60px;
    flex: 1 1 auto;
    @media (max-width: 768px) {
        flex-direction: column;
        margin: 20px;
    }
`;

export const AboutTwoHeader = styled.div`
    display: flex;
    width: 40%;
    height: 100%;
    & img {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AboutTwoDesc = styled.div`
     display: flex;
    flex-direction: column;
    /* flex-grow: 1; */
    width: 50%;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const AboutTwoHeaderTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
   font-style: normal;
   font-weight: 800;
   font-size: 60px;
   background: linear-gradient(180deg, #FFF8EF 0%, #FF0000 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   background-clip: text;
   text-align: left;
   @media (max-width: 768px) {
        font-size: 50px;
        text-align: center;
    }
`;

export const AboutTwoPara = styled.p`
    text-align: left;
    margin-top: -2rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: #000000;
    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const PreFooter = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 35px;
    margin: auto;
    width: 90%;
    height: 30%;
    background-color: rgb(255, 248, 239);
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PreFooterImg = styled.div`
    width: 60%;
    margin: auto;
    & img {
        width: 80%;
    }
    @media (max-width: 768px) {
        margin: auto;
        text-align: center;
        width: 80%;
    }
`;

export const PreFooterDesc = styled.div`
    margin: auto;
    width: 100%;
`;

export const PreFooterHeader = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    background: linear-gradient(180deg, #FFF8EF 0%, #FF0000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
`;

export const PreFooterPara = styled.p`
    margin: auto;
    text-align: center;
    margin-top: -2rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    width: 60%;
    color: #000000;
    margin-bottom: 12px;
    @media (max-width: 768px) {
        width: 80%;
    }
`;