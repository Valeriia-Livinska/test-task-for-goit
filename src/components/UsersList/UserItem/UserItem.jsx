import { ReactComponent as Logo } from "../../../assets/images/icons/logo.svg";
import numberWithComma from "../../../utilities/numberWithComma";
import {
  UserCard,
  LogoLink,
  CardTopImg,
  Line,
  AvaWrapper,
  UserAva,
  TweetsCount,
  FollowersCount,
  FollowBtn,
} from "./UserItem.styled.js";

const UserItem = ({ users }) => {
  return users.map(({ id, user, avatar, tweets, followers }) => {
    const followersWithComma = numberWithComma(followers);

    return (
      <UserCard key={id}>
        <LogoLink
          aria-label="GoIT"
          href="https://goit.global/ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo style={{ width: "76px", height: "22px" }} />
        </LogoLink>
        <CardTopImg />
        <Line />
        <AvaWrapper />
        <UserAva src={avatar} alt={user} />
        <TweetsCount>{tweets} tweets </TweetsCount>
        <FollowersCount>{followersWithComma} followers </FollowersCount>
        <FollowBtn type="button">follow</FollowBtn>
      </UserCard>
    );
  });
};

export default UserItem;
