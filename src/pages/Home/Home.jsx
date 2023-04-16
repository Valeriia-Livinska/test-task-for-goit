import { Wrapper } from "./Home.styled";

import {
  SlideEffect,
  Text,
  SlideDown,
  SlideUp,
  WaveText,
  Waves,
} from "./Home.styled";

const Home = () => {
  return (
    <main>
        <Wrapper>
          <SlideEffect>
            <Text>Be inspired</Text>
            <SlideDown>by</SlideDown>
            <SlideUp to="/tweets">
              <WaveText>FOLLOWING</WaveText>
              <Waves></Waves>
            </SlideUp>
          </SlideEffect>
        </Wrapper>
    </main>
  );
};

export default Home;
