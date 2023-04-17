import { ProgressBar } from "react-loader-spinner";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Loader = () => {
  return (
    <Wrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="lightgrey"
        barColor="#4B2A99"
      />
    </Wrapper>
  );
};

export default Loader;
