import UsersList from "../UsersList/UsersList";

const UsersGallery = ({ users, hadleFollowBtnClick }) => {
  return (
    <UsersList
      users={users}
      hadleFollowBtnClick={hadleFollowBtnClick}
    ></UsersList>
  );
};

export default UsersGallery;
