import { redirect } from 'react-router-dom';
import { deleteItem } from '../utils/helpers';
import { toast } from 'react-toastify';

export const logoutAction = async () => {
  // delete user, budgets and expenses
  deleteItem({ key: 'userName' });
  deleteItem({ key: 'budgets' });
  deleteItem({ key: 'expenses' });

  // toast
  toast.success("You've deleted your account");

  // redirect
  return redirect('/');
};
