import { useNavigate, useLocation } from "react-router-dom";
import UsersList from "../UsersList/UsersList";
import Box from "../Box/Box";
import { GoBackBtn } from "./UsersGallery.styled";

const UsersGallery = ({ users, hadleFollowBtnClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";

  const handleGoBack = () => {
    navigate(backLinkHref);
  };

  return (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      pt={5}
    >
      <GoBackBtn type="button" onClick={handleGoBack}>
        Back
      </GoBackBtn>
      <UsersList
        users={users}
        state={{ from: location }}
        hadleFollowBtnClick={hadleFollowBtnClick}
      ></UsersList>
    </Box>
  );
};

export default UsersGallery;
