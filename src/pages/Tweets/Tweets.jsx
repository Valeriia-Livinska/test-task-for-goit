import { useState, useEffect } from "react";
import { fetchUsers } from "../../helpers/Api";
import UsersGallery from "../../components/UsersGallery/UsersGallery";
import Box from "../../components/Box/Box";
import Spinner from "../../components/Spinner/Spinner";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { TweetsWrapper } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [quantityInRes, setQuantityInRes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers(page);
        setLoading(true);
        setUsers((prevUsers) => (page === 1 ? data : [...prevUsers, ...data]));
        setQuantityInRes(data.length);
        setError(null);
      } catch (error) {
        setLoading(true);
        setError(error);
        console.log("error");
      }
    };
    getUsers();
  }, [page]);

  const incrementPage = () => {
    setPage((state) => state + 1);
  };

  const limitPerPage = 8;
  const displayBtn = quantityInRes < limitPerPage ? false : true;

  if (error) {
    return <div>Sorry, something went wrong: {error.message}</div>;
  } else if (!loading) {
    return (
      <Box flexDirection="column" alignItems="center" mt={8}>
        <Spinner />
      </Box>
    );
  } else {
    return (
      <main>
        <Box pb={7}>
          <TweetsWrapper>
            <UsersGallery users={users}></UsersGallery>
            {displayBtn && <LoadMoreBtn onClick={incrementPage} />}
          </TweetsWrapper>
        </Box>
      </main>
    );
  }
};

export default Tweets;
