import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './actions/logout';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        // index: true, equivale a path: '/'
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ]
  },
  {
    path: '/about',
    element: <h1>About</h1>
  }
]);

export default App;
