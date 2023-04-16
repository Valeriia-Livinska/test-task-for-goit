import styled from "styled-components";

export const GoBackBtn = styled.button`
  margin-bottom: 15px;
  margin-left: 105px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-cintent: center;

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
