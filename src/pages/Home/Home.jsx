import {
  SlideEffect,
  Text,
  SlideDown,
  SlideUp,
  WaveText,
  Waves,
} from "./Home.styled";

export default function Home() {
  return (
    <main>
      <SlideEffect>
        <Text>Be inspired</Text>
        <SlideDown>by</SlideDown>
        {/* <SlideUp>FOLLOWING</SlideUp> */}
        <SlideUp to="/tweets">
          <WaveText>FOLLOWING</WaveText>
          <Waves></Waves>
        </SlideUp>
      </SlideEffect>
    </main>
  );
}
