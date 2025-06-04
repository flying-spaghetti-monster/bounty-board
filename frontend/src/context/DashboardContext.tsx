import { createContext, useContext, useState, useCallback, useMemo } from "react";
import toast from 'react-hot-toast';
// import axios from 'axios';
import { useNavigate } from 'react-router';
import { setToken } from '../helper/localSorageHelper';
import { Login } from '../types';
import { instance as axios } from '../api/axios';

type DashboardPageContextType = {
  // isLogin: boolean,
  // setLogin: (val: boolean) => void;
  // registration: (data: Auth) => void;
  // login: (data: Auth) => void;
};

const DashboardPageContext = createContext<DashboardPageContextType | undefined>(undefined);


export const useDashboardPage = () => {
  const context = useContext(DashboardPageContext);
  if (!context) {
    throw new Error("useDashboardPage must be used within a DashboardPageProvider");
  }
  return context;
};

// type Response = {
//   status: number,
//   data: {}
// }

export const DashboardPageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {



  // const { data } = useQuery<categoriesResponse>({
  //   queryKey: ['bounty-list', currentPage, action],
  //   staleTime: 1000 * 60 * 5, // 5 minutes
  //   keepPreviousData: true,
  //   queryFn: async () => {
  //     const response = await toast.promise(
  //       axios.get('/categories/findAll?page=' + currentPage),
  //       {
  //         loading: 'Loading categories...',
  //         success: 'Loaded categories successfully',
  //         error: 'Error loading categories',
  //       }
  //     );
  //     return response.data;
  //   }
  // })

  const contextValue = useMemo(
    () => ({
      // isLogin,
      // setLogin,
      // registration,
      // login
    }),
    [
      // isLogin,
      // setLogin,
      // registration,
      // login
    ]
  );


  return (
    <DashboardPageContext.Provider value={contextValue} >
      {children}
    </DashboardPageContext.Provider>
  );
};
