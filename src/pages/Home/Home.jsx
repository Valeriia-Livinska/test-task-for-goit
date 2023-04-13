import {
  Background,
  SlideEffect,
  Text,
  SlideDown,
  SlideUp,
} from './Home.styled';

export default function Home() {
  return (
    <Background>
      <SlideEffect>
        <Text>Be inspired</Text>
        <SlideDown>by</SlideDown>
        <SlideUp>FOLLOWING</SlideUp>
      </SlideEffect>
    </Background>
  );
}
