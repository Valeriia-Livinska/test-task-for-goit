import styled from "styled-components";
import cardTopImg from "../../assets/images/cardImg.webp";

export const UserUnit = styled.li``;

export const UserCard = styled.article`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contant: center;
  padding: 28px 36px 36px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  color: ${(p) => p.theme.colors.purple};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: ${(p) => p.theme.radii.medium};

  &::after {
    content: "";
    position: absolute;
    top: 214px;
    left: 0;
    display: block;
    width: 100%;
    height: 8px;
    background: ${(p) => p.theme.colors.purple};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const LogoLink = styled.a`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const CardTopImg = styled.div`
  width: 308px;
  height: 168px;
  background: url(${cardTopImg});

  background-repeat: no-repeat;
  }
`;

export const AvaWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: ${(p) => p.theme.radii.round};
`;

export const UserAva = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 62px;
  border-radius: ${(p) => p.theme.radii.round};
  transform: translate(-50%, -50%);
`;

export const TweetsCount = styled.p`
  margin-top: 88px;

  text-transform: uppercase;
`;

export const FollowersCount = styled.p`
  margin-top: 16px;
  margin-bottom: 26px;

  text-transform: uppercase;
`;

export const FollowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  width: 196px;
  height: 50px;

  color: ${(p) => p.theme.colors.blackText};
  background-color: ${(p) =>
    p.isFollowing ? p.theme.colors.accentMint : p.theme.colors.purple};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  text-transform: uppercase;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${(p) =>
      p.isFollowing ? p.theme.colors.accentMint : p.theme.colors.purple};
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
