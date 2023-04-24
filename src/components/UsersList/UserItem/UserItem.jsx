import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import { updateIsFollowing } from "../../helpers/Api";
import numberWithComma from "../../utilities/numberWithComma";
import notifyErr from "../../utilities/notifyErr";
import {
  UserUnit,
  UserCard,
  LogoLink,
  CardTopImg,
  AvaWrapper,
  UserAva,
  TweetsCount,
  FollowersCount,
  FollowBtn,
} from "./UserItem.styled.js";

const UserItem = ({ users, hadleFollowBtnClick }) => {
  return users.map(({ id, user, avatar, tweets, followers, isFollowing }) => {
    const followersWithComma = numberWithComma(followers);

    const onFollowClick = async () => {
      try {
        const updFollowingUser = await updateIsFollowing(
          id,
          isFollowing,
          followers
        );
        hadleFollowBtnClick(updFollowingUser);
      } catch (error) {
        notifyErr();
      }
    };

    return (
      <UserUnit key={id}>
        <UserCard>
          <LogoLink
            aria-label="GoIT"
            href="https://goit.global/ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo style={{ width: "76px", height: "22px" }} />
          </LogoLink>
          <CardTopImg />
          <AvaWrapper>
            <UserAva src={avatar} alt={user} />
          </AvaWrapper>
          <TweetsCount>{tweets} tweets </TweetsCount>
          <FollowersCount>{followersWithComma} followers </FollowersCount>
          <FollowBtn
            type="button"
            onClick={onFollowClick}
            isFollowing={isFollowing}
          >
            {isFollowing ? "following " : "follow"}
          </FollowBtn>
        </UserCard>
      </UserUnit>
    );
  });
};

export default UserItem;
