import UserItem from "../../components/UserItem/UserItem";
import { List } from "./UsersList.styled";

const UsersList = ({ users, hadleFollowBtnClick }) => {
  return (
    <List>
      <UserItem users={users} hadleFollowBtnClick={hadleFollowBtnClick} />
    </List>
  );
};

export default UsersList;
