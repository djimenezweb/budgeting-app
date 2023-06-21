import { redirect } from 'react-router-dom';
import { deleteItem } from '../utils/helpers';

export const logoutAction = async () => {
  //delete user
  deleteItem({ key: 'userName' });

  //redirect
  return redirect('/');
};
