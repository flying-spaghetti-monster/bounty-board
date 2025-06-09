import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { instance as axios } from '../api/axios';
import toast from 'react-hot-toast';

export function useActiveId() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export const handleCreateJob = async (data: object) => {
  const response = await axios.post(`/bounty/create`, data);
  if (response.status) {
    toast.success("Job Created!");
  }
}

export const useGetBountyById = (id: string | null) => {
  const { data, isLoading } = useQuery({
    queryKey: ['bounty-item', id],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      if (id) {
        const response = await axios.get('/bounty/' + id);
        return response.data;
      }
    }
  })

  return {
    jobItem: data,
    isLoading
  }
}