import Navbar from "./Navbar";
import { HeroImageWrapper, HeroWrapper, HeaderText, HeaderBtn, BtnWrapper } from "../Styles/Home-styles";
import HeroImage from "../assets/Hero.png";
import { Card, CardContainer, CompanyName, JobDetails, JobTitle, SearchBar, SearchWrapper } from "../Styles/Application-styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Application = () => {
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

    const handleChange = e => {
        setSearch(e.target.value)
        console.log(searchResult)
    }

    // console.log(searchResult)

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (search) {
            setJobs(searchResult)
        } else if (searchResult.length === 0) {
            console.log('Nothing here')
        }
    };

    return (
        <div>
            <Navbar />
            <HeroWrapper>
                <HeroImageWrapper>
                    <img src={HeroImage} alt="hero-image" />
                    <HeaderText>Search for your job</HeaderText>
                    <form name="form" onSubmit={(e) => handleOnSubmit(e)} >
                        <SearchWrapper>
                            <SearchBar placeholder='Search for jobs' onChange={handleChange} />
                        </SearchWrapper>
                    </form>
                </HeroImageWrapper>
            </HeroWrapper>
            <h1>{jobs.length} Trending jobs</h1>
            <Link to="/application">Trending jobs</Link>
            {jobs.map((job, i) => (
                <CardContainer key={i}>
                    <Card>
                        <img className='company-logo' src={job.company_logo} alt={job.title} />
                        <JobDetails>
                            <CompanyName>{job.company_name}</CompanyName>
                            <JobTitle>{job.title}</JobTitle>
                        </JobDetails>
                    </Card>
                </CardContainer>
            ))}
        </div>
    );
}

export default Application;