import styled from 'styled-components';
import '../App.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from "axios";
import Companies from './Companies';
import { Link } from "react-router-dom";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroWrapper = styled.div`
   background-image: url("Hero.png");
   background-repeat: no-repeat;
   height: 60vh;
   width: 100%;
   background-position: center;
   background-size: cover;
`;

const SearchWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin: 4rem;
`;

const SearchBar = styled.input`
   width: 50%;
   margin: 2rem;
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
       }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Card = styled.div`
   display: flex;
   flex-direction: row;
   width: 80%;
   height: 193px;
   background: #FFF8EF;
   border-radius: 30px;
   cursor: pointer;
   overflow: ellipsis;
`;

const Tag = styled.div` 
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

const CompanyName = styled.p`
   margin-bottom: -2rem;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
`;

const JobDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin: 1.5rem;
   overflow: ellipsis;
`;

const JobTitle = styled.h2`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 33px;
   @media (max-width: 768px) {
       font-size: 30px;
   }
`;

const JobLocation = styled.p`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   margin-top: -2rem;
`;

const HeaderText = styled.h3`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 700;
   font-size: 30px;
   text-align: center;
`;

function Application() {
    const [jobs, setJobs] = useState([])
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [template, setTemplate] = useState("")

    const fetchJobs = async () => {
        const response = await axios("https://remotive.com/api/remote-jobs?limit=50")
        setJobs(response.data.jobs)
    }
    useEffect(() => {
        fetchJobs();
    }, []);

    const searchJobs = async () => {
        const response = await axios(`https://remotive.com/api/remote-jobs?search=${search}`)
        setSearchResult(response.data.jobs)
    }
    useEffect(() => {
        searchJobs();
    }, [search]);
    
    <JobDetails jobs={jobs} />
    console.log(jobs)
    
    const handleChange = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    console.log(searchResult)

    return (
        <AppWrapper>
            <HeroWrapper>
                <Navbar />
                <form>
                    <SearchWrapper>
                        <SearchBar onChange={handleChange} placeholder='Search for jobs' />
                    </SearchWrapper>
                </form>
            </HeroWrapper>
            <Companies />
            <HeaderText>{jobs.length} Trending jobs</HeaderText>
            {searchResult && jobs.map((job, i) => (
                <CardContainer key={i}>
                    <Card>
                        <img className='company-logo' src={job.company_logo} alt={job.title} />
                        <JobDetails>
                            <CompanyName>{job.company_name}</CompanyName>
                            <JobTitle>{job.title}</JobTitle>
                            <JobLocation>{job.candidate_required_location}</JobLocation>
                        </JobDetails>
                        {/* <Tag>New</Tag> */}
                    </Card>
                </CardContainer>
            ))}
        </AppWrapper>
    )
}
export default Application;