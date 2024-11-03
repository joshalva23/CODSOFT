import {ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged,User } from 'firebase/auth';
import { auth } from '../firebase/firebase.tsx';

interface AuthContextType{
    currentUser : User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    return context || { currentUser: null, loading: true };
};

export const AuthProvider = ({ children }:{children:ReactNode}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
