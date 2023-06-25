import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../utils/helpers';
import Table from '../components/Table';

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No expenses to show</p>
      )}
    </div>
  );
};

// loader function
export const expensesLoader = () => {
  const expenses = fetchData('expenses');
  return { expenses };
};

export default ExpensesPage;
