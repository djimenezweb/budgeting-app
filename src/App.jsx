import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './actions/logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, { expensesLoader } from './pages/ExpensesPage';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
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
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesLoader
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
