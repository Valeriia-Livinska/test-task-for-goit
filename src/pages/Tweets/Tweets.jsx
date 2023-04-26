import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchUsers } from "../../helpers/Api";
import notifyErr from "../../utilities/notifyErr";
import UsersGallery from "../../components/UsersGallery/UsersGallery";
import Box from "../../components/Box/Box";
import Spinner from "../../components/Spinner/Spinner";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import { TweetsWrapper, GoBackBtn, ErrMessage } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  // for correct working Loader and Load More because mockapi do not sent a total count in free version
  const dataTotalCount = 35;

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(page);
        if (data.length > 0) {
          setUsers((prevUsers) =>
            page === 1 ? data : [...prevUsers, ...data]
          );
          setTotalCount((prevState) =>
            page === 1 ? dataTotalCount - data.length : prevState - data.length
          );
          setError(null);
        }
      } catch (error) {
        setError(error);
        notifyErr();
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [page]);

  const navigate = useNavigate();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";

  const handleGoBack = () => {
    navigate(backLinkHref);
  };

  const incrementPage = () => {
    setPage((state) => state + 1);
  };

  const hadleFollowBtnClick = (updFollowingUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updFollowingUser.id ? updFollowingUser : user
      )
    );
  };

  return (
    <main>
      <GoBackBtn type="button" onClick={handleGoBack}>
        Back
      </GoBackBtn>
      {users.length === 0 && !loading && (
        <ErrMessage>
          Sorry, something went wrong , please try again...
        </ErrMessage>
      )}

      {page === 1 && loading ? (
        <Box flexDirection="column" alignItems="center" mt={8}>
          <Spinner />
        </Box>
      ) : (
        <Box
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          pb={7}
        >
          <TweetsWrapper>
            <UsersGallery
              users={users}
              hadleFollowBtnClick={hadleFollowBtnClick}
            ></UsersGallery>

            {!!totalCount &&
              (!loading ? <LoadMoreBtn onClick={incrementPage} /> : <Loader />)}
          </TweetsWrapper>
        </Box>
      )}
    </main>
  );
};

export default Tweets;
