import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';
import Intro from '../components/Intro';

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

// action
export const dashboardAction = async ({ request }) => {
  const data = await request.formData();
  console.log({ data, request });
};

// loader function
export const dashboardLoader = () => {
  const userName = fetchData('userName');
  return { userName };
};

export default Dashboard;
