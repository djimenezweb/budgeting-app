import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';
import Nav from '../components/Nav';

// loader function
export const mainLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src="assets/wave.svg" />
    </div>
  );
};

export default Main;
