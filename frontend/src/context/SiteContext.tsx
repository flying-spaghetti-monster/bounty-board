import { createContext, useContext, useState, useCallback, useMemo } from "react";
import qs from 'qs';
import toast from 'react-hot-toast';
import { Bounty, PageDirection } from '../types';
import { instance as axios } from '../api/axios';
import { useQuery } from '@tanstack/react-query';
import { RESULTS_PER_PAGE } from '../lib/constants';
import { getToken, removeToken } from '../helper/localSorageHelper';
import { useNavigate } from 'react-router';

type SitePageContextType = {
  isLoggedIn: boolean,
  itemsSortedAndSliced: []
  isLoading: boolean,
  isPersonalOnly: boolean,
  total: number,
  currentPage: number,
  setCurrentPage: number,
  totalPerPages: number,
  sortByPlanet: string | null,
  sortByStatus: string | null,
  handleAceptJob: (val: string) => void;
  setSortByPlanet: (val: string) => void;
  setSortByStatus: (val: string) => void;
  handleChangePage: (val: string) => void;
  setPersonalOnly: (val: boolean) => void;
  handleLogaut: () => void;
};

const SitePageContext = createContext<SitePageContextType | undefined>(undefined);


export const useSitePage = () => {
  const context = useContext(SitePageContext);
  if (!context) {
    throw new Error("useSitePage must be used within a SitePageProvider");
  }
  return context;
};

type Response = {
  total: number,
  data: Bounty[]
}

export const SitePageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByPlanet, setSortByPlanet] = useState();
  const [sortByStatus, setSortByStatus] = useState();
  const [isPersonalOnly, setPersonalOnly] = useState(false);
  const isLoggedIn = !!getToken();
  const navigate = useNavigate();

  const query = qs.stringify({
    page: currentPage,
    take: RESULTS_PER_PAGE,
    planet: sortByPlanet,
    status: sortByStatus,
    personalOnly: isPersonalOnly
  }, { skipNulls: true }); // skip undefined or null

  const { data, isLoading } = useQuery<Response>({
    queryKey: ['bounty-list', currentPage, sortByPlanet, sortByStatus, isPersonalOnly],
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
    queryFn: async () => {
      const response = isPersonalOnly ? await axios.post(`/bounty?${query}`) : await axios.get(`/bounty?${query}`);
      return response.data;
    }
  })

  const itemsSortedAndSliced = data && data.items;
  const total = data && data.total;

  const totalPerPages = total / RESULTS_PER_PAGE;

  const handleAceptJob = useCallback(async (id: string) => {
    const response = await axios.get(`/bounty/accept/${id}`);
    if (response.status) {
      toast.success("Job Accepted!");
    }
  }, []);

  const handleChangePage = useCallback((direction: PageDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  }, []);

  const handleLogaut = useCallback(() => {
    removeToken();
    toast.success("You saccseed Logaut!");
    navigate('/');
  }, []);

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      itemsSortedAndSliced,
      isLoading,
      total,
      currentPage,
      totalPerPages,
      sortByPlanet,
      sortByStatus,
      isPersonalOnly,
      setPersonalOnly,
      handleAceptJob,
      setCurrentPage,
      setSortByPlanet,
      setSortByStatus,
      handleChangePage,
      handleLogaut,
    }),
    [
      isLoggedIn,
      itemsSortedAndSliced,
      isLoading,
      total,
      currentPage,
      totalPerPages,
      sortByPlanet,
      sortByStatus,
      isPersonalOnly,
      setPersonalOnly,
      handleAceptJob,
      setCurrentPage,
      setSortByPlanet,
      setSortByStatus,
      handleChangePage,
      handleLogaut,
    ]
  );


  return (
    <SitePageContext.Provider value={contextValue} >
      {children}
    </SitePageContext.Provider>
  );
};
