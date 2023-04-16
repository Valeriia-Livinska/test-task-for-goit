import UserItem from "../UsersList/UserItem/UserItem";
import { List } from "./UsersList.styled";

const UsersList = ({ users }) => {
  return (
    <List>
      <UserItem users={users} />
    </List>
  );
};

export default UsersList;
