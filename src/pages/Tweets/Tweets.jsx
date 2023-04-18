import { useState, useEffect } from "react";
import { fetchUsers } from "../../helpers/Api";
import notifyErr from "../../utilities/notifyErr";
import UsersGallery from "../../components/UsersGallery/UsersGallery";
import Box from "../../components/Box/Box";
import Spinner from "../../components/Spinner/Spinner";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import { TweetsWrapper } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // for correct working Loader and Load More because mockapi do not sent a total count in free version
  const dataTotalCount = 35;

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(page);
        setUsers((prevUsers) => (page === 1 ? data : [...prevUsers, ...data]));
        setTotalCount((prevState) =>
          page === 1 ? dataTotalCount - data.length : prevState - data.length
        );
        setError(null);
      } catch (error) {
        setError(error);
        notifyErr();
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [error, page]);

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
      {page === 1 && loading ? (
        <Box flexDirection="column" alignItems="center" mt={8}>
          <Spinner />
        </Box>
      ) : (
        <Box pb={7}>
          <TweetsWrapper>
            {users.length > 0 && (
              <UsersGallery
                users={users}
                hadleFollowBtnClick={hadleFollowBtnClick}
              ></UsersGallery>
            )}
            {!!totalCount &&
              (!loading ? <LoadMoreBtn onClick={incrementPage} /> : <Loader />)}
          </TweetsWrapper>
        </Box>
      )}
    </main>
  );
};

export default Tweets;