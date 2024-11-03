import {ReactNode} from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.tsx';

const PrivateRoute = ({ children }: {children:ReactNode}) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;