import { redirect } from 'react-router-dom';
import { deleteItem } from '../utils/helpers';
import { toast } from 'react-toastify';

export const logoutAction = async () => {
  // delete user
  deleteItem({ key: 'userName' });

  // toast
  toast.success("You've deleted your account");

  // redirect
  return redirect('/');
};
