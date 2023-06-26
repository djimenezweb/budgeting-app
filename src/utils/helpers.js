// Generate random color
const generateRandomColor = () => {
  const existingBudgetLength = fetchData('budgets')?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Get item from Local Storage
export const fetchData = key => {
  return JSON.parse(localStorage.getItem(key));
};

// Delete item from Local Storage
export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter(item => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// export const deleteItem = ({ key }) => {
//   return localStorage.removeItem(key);
// };

// Get all items from Local Storage
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter(item => item[key] === value);
};

// Add Budget to Local Storage
export const createBudget = ({ name, amount }) => {
  const newItem = { id: crypto.randomUUID(), name, amount: Number(amount), color: generateRandomColor(), createdAt: Date.now() };
  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([newItem, ...existingBudgets]));
};

// Add Expense to Local Storage
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = { id: crypto.randomUUID(), name, amount: Number(amount), budgetId, createdAt: Date.now() };
  const existingExpenses = fetchData('expenses') ?? [];
  return localStorage.setItem('expenses', JSON.stringify([newItem, ...existingExpenses]));
};

// Total spent by budget
export const calculateSpentByBudget = budgetId => {
  const expenses = fetchData('expenses') ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // Esto es una especie de filtro para recuperar únicamente los gastos cuyo id sea el mismo que budgetId
    if (expense.budgetId !== budgetId) return acc;
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Format currency
export const formatCurrency = amount => {
  return amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
};

// Format percentages
export const formatPercentages = amount => {
  return amount.toLocaleString('es-ES', { style: 'percent', minimumFractionDigits: 0 });
};

// Format Date to Local String
export const formatDateToLocaleString = epoch => new Date(epoch).toLocaleDateString('es-ES');
