import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h1>{userName}</h1>
      <p>Dashboard</p>
    </div>
  );
};

// loader function
export const dashboardLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

export default Dashboard;
