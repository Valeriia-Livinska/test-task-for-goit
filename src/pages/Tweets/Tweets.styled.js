import styled from "styled-components";
import { Wrapper } from "../Home/Home.styled";

export const TweetsWrapper = styled(Wrapper)`
  padding-top: ${(p) => p.theme.space[5]}px;
  padding-bottom: ${(p) => p.theme.space[7]}px;
`;

export const GoBackBtn = styled.button`
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(p) => p.theme.colors.blackText};
  cursor: pointer;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.colors.purple};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hoverPurple};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const ErrMessage = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  font-size: 25px;
  color: ${(p) => p.theme.colors.purple};
`;
