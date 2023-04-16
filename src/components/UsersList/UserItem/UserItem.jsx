import { ReactComponent as Logo } from "../../../assets/images/icons/logo.svg";
import {
  UserCard,
  LogoLink,
  CardTopImg,
  Line,
  AvaWrapper,
} from "./UserItem.styled.js";

const UserItem = ({ users }) => {
  return users.map(({ id, user, avatar, tweets, followers }) => {
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
        <img src={avatar} alt={user} />
        <p>{tweets} TWEETS </p>
        <p>{followers} FOLLOWERS </p>
      </UserCard>
    );
  });
};

export default UserItem;
