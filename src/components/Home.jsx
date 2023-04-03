import { AboutDesc, AboutHeader, AboutImageWrapper, AboutPara, AboutTwo, AboutTwoDesc, AboutTwoHeader, AboutTwoHeaderTitle, AboutTwoPara, AboutWrapper, BtnWrapper, HeaderBtn, HeaderText, HeroImageWrapper, HeroWrapper, HomwWrapper, PreFooter, PreFooterDesc, PreFooterHeader, PreFooterImg, PreFooterPara } from "../Styles/Home-styles";
import preFooter from "../assets/Prefooter.png";
import HeaderVid from "../assets/Header.mp4";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <HomwWrapper>
            <HeroWrapper>
                <HeroImageWrapper>
                    {/* <img src={HeroImage} alt="hero-image" /> */}
                    <video controls loop autoPlay width="100%" style={{ borderRadius: "25px" }}>
                        <source src={HeaderVid} type="video/mp4"
                        />
                        Sorry, your browser doesn't support videos.
                    </video>
                    <HeaderText>Sapa is not an option</HeaderText>
                    <BtnWrapper>
                        {/* <Link to="/application" style={{marginLeft: "-2rem"}}> */}
                            <HeaderBtn>Find your dream job</HeaderBtn>
                        {/* </Link> */}
                    </BtnWrapper>
                </HeroImageWrapper>
            </HeroWrapper>
            <AboutWrapper>
                <AboutImageWrapper>
                    <img src={About1} alt="about-img" />
                </AboutImageWrapper>
                <AboutDesc>
                    <AboutHeader>Find that job</AboutHeader>
                    <AboutPara>Get the remote job you deserve Lorem ipsum dolor sit amet, consectetur adipiscing elit. At non nec sit viverra duis tortor non. Est fringilla a volutpat tortor suspendisse malesuada.</AboutPara>
                </AboutDesc>
            </AboutWrapper>
            <AboutTwo>
                <AboutTwoHeader>
                    <img src={About2} alt="about-img" />
                </AboutTwoHeader>
                <AboutTwoDesc>
                    <AboutTwoHeaderTitle>Remote work</AboutTwoHeaderTitle>
                    <AboutTwoPara>Get the remote job you deserve Lorem ipsum dolor sit amet, consectetur adipiscing elit. At non nec sit viverra duis tortor non. Est fringilla a volutpat tortor suspendisse malesuada.</AboutTwoPara>
                </AboutTwoDesc>
            </AboutTwo>
            <PreFooter>
                <PreFooterImg>
                    <img src={preFooter} alt="pre-footer-img" />
                </PreFooterImg>
                <PreFooterDesc>
                    <PreFooterHeader>Do what you love</PreFooterHeader>
                    <PreFooterPara>Get the remote job you deserve Lorem ipsum dolor sit amet, consectetur adipiscing elit. At non nec sit viverra duis tortor non. Est fringilla a volutpat tortor suspendisse malesuada.</PreFooterPara>
                </PreFooterDesc>
            </PreFooter>
        </HomwWrapper>
    );
}

export default Home;