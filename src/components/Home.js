import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData } from '../redux/Message/messageSlice';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <p className="home-text">HomePage</p>
      {data && (
        <div className="msg-container">
          <p>Message from us:</p>
          <p>{data.content}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
