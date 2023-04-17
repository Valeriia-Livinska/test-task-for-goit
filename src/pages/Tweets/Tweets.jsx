import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchUsers } from "../../helpers/Api";
import notifyErr from "../../utilities/notifyErr";
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
      setLoading(true);
      try {
        const data = await fetchUsers(page);
        setUsers((prevUsers) => (page === 1 ? data : [...prevUsers, ...data]));
        setQuantityInRes(data.length);
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

  const limitPerPage = 8;
  const displayBtn = quantityInRes < limitPerPage ? false : true;

  return (
    <main>
      {page === 1 && loading ? (
        <Box flexDirection="column" alignItems="center" mt={8}>
          <Spinner />
        </Box>
      ) : (
        <Box pb={7}>
          <TweetsWrapper>
            <UsersGallery users={users}></UsersGallery>
            {displayBtn && <LoadMoreBtn onClick={incrementPage} />}
          </TweetsWrapper>
        </Box>
      )}

      <ToastContainer />
    </main>
  );
};

export default Tweets;
