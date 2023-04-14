import { SlideEffect, Text, SlideDown, SlideUp } from "./Home.styled";

export default function Home() {
  return (
    <>
      <SlideEffect>
        <Text>Be inspired</Text>
        <SlideDown>by</SlideDown>
        <SlideUp>FOLLOWING</SlideUp>
      </SlideEffect>
    </>
  );
}
