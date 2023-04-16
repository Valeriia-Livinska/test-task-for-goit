import { useState, useEffect } from "react";
import UsersGallery from "../../components/UsersGallery/UsersGallery";
import { fetchUsers } from "../../helpers/Api";
import { Wrapper } from "../Home/Home.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setLoading(true);
        setUsers(data);
      } catch (error) {
        setLoading(true);
        setError(error);
        console.log("error");
      }
    };
    getUsers();
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!loading) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <main>
        <Wrapper>
          <UsersGallery users={users}></UsersGallery>
        </Wrapper>
      </main>
    );
  }
};

export default Tweets;
