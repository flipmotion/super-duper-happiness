import { useQuery } from '@apollo/client';
import GlobalStyle from "./GlobalStyles";
import * as queries from './queries';
import Profile from './Profile';

const App = () => {
  const { loading, error, data } = useQuery(queries.GET_PROFILE);
  return (
    <>
      <GlobalStyle/>
      {loading && <div>loading...</div>}
      {error && <div>Something went wrong...</div>}
      {data && <Profile {...data} />}
    </>
  );
}

export default App;
