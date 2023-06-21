import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>Dashboard{userName}</div>;
};

// loader function
export const dashboardLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

export default Dashboard;
