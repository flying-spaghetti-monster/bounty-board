import { createContext, useContext, useState, useCallback, useMemo } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { setToken } from '../helper/localSorageHelper';
import { Login } from '../types';
import { SERVER_URL } from '../lib/constants';

type AuthPageContextType = {
  isLogin: boolean,
  setLogin: (val: boolean) => void;
  registration: (data: Login) => void;
  login: (data: Login) => void;
};

const AuthPageContext = createContext<AuthPageContextType | undefined>(undefined);


export const useAuthPage = () => {
  const context = useContext(AuthPageContext);
  if (!context) {
    throw new Error("useAuthPage must be used within a AuthPageProvider");
  }
  return context;
};

type Response = {
  status: number,
  data: {}
}

export const AuthPageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLogin, setLogin] = useState<boolean>(true)

  const navigate = useNavigate();
  const registration = useCallback(async (data: Login) => {
    try {
      const res = await axios.post<Response>(`${SERVER_URL}/auth/registration`, data);
      if (res.status === 201) {
        toast.success("Registration successful!");
        navigate('/login');
      } else {
        toast.error("Registration failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please check your credentials.");
    }
  }, [])

  const login = useCallback(async (data: Login) => {
    try {
      const res = await axios.post<Response>(`${SERVER_URL}/auth/login`, data);

      if (res.status === 200) {
        toast.success("Login successful!");
        setToken(res.data?.access_token || '');
        navigate('/');
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  }, [])

  const contextValue = useMemo(
    () => ({
      isLogin,
      setLogin,
      registration,
      login
    }),
    [
      isLogin,
      setLogin,
      registration,
      login
    ]
  );

  return (
    <AuthPageContext.Provider value={contextValue} >
      {children}
    </AuthPageContext.Provider>
  );
};
