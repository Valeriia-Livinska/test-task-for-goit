import styled from "styled-components";
import { HeaderNavLink } from "../../components/Navigation/Navigation.styled";

export const SlideEffect = styled.div`
  // position: relative;
  // top: 50%;
  // left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 10px;
  width: 800px;
  height: 80vh;

  color: ${(p) => p.theme.colors.blackText};
  overflow: hidden;
  background: white;
  border-radius: ${(p) => p.theme.radii.medium};
`;

export const Text = styled.div`
  position: relative;
  top: 40px;
  opacity: 0;
  font-size: 35px;
  animation: slideUp ease 0.4s forwards;
`;
export const SlideDown = styled.div`
  position: relative;
  top: -40px;
  left: 5px;
  opacity: 0;
  font-size: 35px;
  animation: slideDown ease 0.4s forwards 0.6s;
  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(40px);
      opacity: 1;
    }
  }
`;
// export const SlideUp = styled.div`
//   position: relative;
//   top: 40px;
//   left: 10px;
//   opacity: 0;
//   font-size: 35px;
//   animation: slideUp ease 0.5s forwards 1.2s;
//   @keyframes slideUp {
//     0% {
//       transform: translateY(0);
//     }
//     100% {
//       transform: translateY(-40px);
//       opacity: 1;
//     }
//   }

export const SlideUp = styled(HeaderNavLink)`
  position: relative;
  opacity: 0;
  top: 40px;
  left: 10px;
  width: 196px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: inherit;
  border: none;
  background-color: ${(p) => p.theme.colors.accentMint};
  border-radius: 0 0 ${(p) => p.theme.radii.normal}
    ${(p) => p.theme.radii.normal};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  overflow: hidden;
  text-decoration: none;
  transition: all 0.8s ease 0s;

  animation: slideUp ease 0.5s forwards 1.2s;

  @keyframes slideUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-40px);
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    border-radius: ${(p) => p.theme.radii.normal};
    box-shadow: 0 0 20px rgba(92, 211, 168, 0.6);
    transition: all 0.8s ease 0.1s;
  }

  &:hover div {
    top: -50px;
  }
`;

export const WaveText = styled.span`
  position: relative;
  z-index: 1;
`;

export const Waves = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 196px;
  height: 196px;
  background-color: rgb(92, 211, 168);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: all 1s ease 0s;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 50%;
    width: 250%;
    height: 250%;
    transform: translateX(-50%) translateY(-96%);
  }

  &::before {
    background-color: rgb(255, 255, 255);
    border-radius: 48%;
    animation: waves 5s infinite linear;
  }
  &::after {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 44%;
    animation: waves 10s infinite linear;
  }

  @keyframes waves {
    0% {
      transform: translate3d(-50%, -96%, 0);
    }
    100% {
      transform: translate3d(-50%, -96%, 0) rotate(360deg);
    }
  }
`;
