import UsersList from "../UsersList/UsersList";
import { Box } from "../Box/Box.jsx";

const UsersGallery = ({ users }) => {
  return (
    <Box pt={5}>
      <UsersList users={users}></UsersList>
    </Box>
  );
};

export default UsersGallery;
