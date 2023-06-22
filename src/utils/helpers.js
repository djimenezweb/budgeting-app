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
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// Add budget to Local Storage
export const createBudget = ({ name, amount }) => {
  const newItem = { id: crypto.randomUUID(), name, amount: Number(amount), color: generateRandomColor(), createdAt: Date.now() };
  const existingBudgets = fetchData('budgets') ?? [];
  return localStorage.setItem('budgets', JSON.stringify([newItem, ...existingBudgets]));
};
