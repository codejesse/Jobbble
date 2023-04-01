import styled from 'styled-components';

export const SearchWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: -10rem;
   @media (max-width: 768px) {
    margin-top: -3.2rem;
    }
`;

export const SearchBar = styled.input`
    width: 50%;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    text-align: left;
    height: 70px;
    border: none;
    background: #FFFFFF;
    border-radius: 20px;
    background-image: url("Search.png");
    background-repeat: no-repeat;
    background-size: 3rem;
    background-position: left;
    background-position-x: 2rem;
   &:focus {
        background-image: none;
        ::placeholder {
            margin-left: 22rem;
        }
    }
   &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
     line-height: 42px;
       line-height: 45px;
       text-align: center;
       color: #5C5C5C;
       margin: auto;
       margin-left: 12rem;
       @media (max-width: 768px) {
           margin: 0;
           font-size: 1rem;
       }
   }
   @media (max-width: 768px) {
           background-position-x: 0.55rem;
           font-size: 1.2rem;
           width: 70%;
           height: 50px;
       }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   height: 193px;
   background: #FFF8EF;
   border-radius: 30px;
   cursor: pointer;
   overflow: ellipsis;
`;

export const Tag = styled.div` 
   margin: auto;
   width: 85px;
   height: 43px;
   background: #FF0000;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 700;
   font-size: 26px;
   color: white;
   text-align: center;
`;

export const CompanyName = styled.p`
   margin-bottom: -2rem;
   margin-left: -3rem;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   @media (max-width: 400px) {
    font-size: 10px;
   }
`;

export const JobDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin: 1.5rem;
   height: fit-content;
   overflow: ellipsis;
   @media (max-width: 768px) {
    margin: auto;
   }
`;

export const JobTitle = styled.h2`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 2vw;
   margin-left: -3rem;
   margin-top: 2rem;
   @media (max-width: 768px) {
       font-size: 10px;
       margin-top: 2rem;
   }
`;

export const JobLocation = styled.p`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   margin-top: -2rem;
`;

export const HeaderText = styled.h3`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 700;
   font-size: 30px;
   text-align: center;
`;