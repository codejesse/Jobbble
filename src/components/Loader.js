import '../App.css';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 80%;
   margin: auto;
`;

function Loader() {
    return(
        <LoaderWrapper>
            <img src="Loader.png" alt="splash-screen" />
        </LoaderWrapper>
    )
}
export default Loader;