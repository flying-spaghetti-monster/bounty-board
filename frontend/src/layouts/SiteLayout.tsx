import { SitePageProvider } from '../context/SiteContext';
import { Toaster } from 'react-hot-toast';
import AppSidebar from '../pages/components/AppSidebar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Background from '../pages/components/Background';
import JobItemContent from '../pages/components/JobItemContent';
import Header from '../pages/components/Header';

const queryClient = new QueryClient();

export default function SiteLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SitePageProvider>
        <div className='flex h-screen items-center justify-center '>
          <Background />
          <main className="container w-auto flex justify-center h-[600px]  overflow-hidden bg-gray-800 rounded-2xl">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <div className="job-details">
                <JobItemContent />
              </div>
            </div>
            <Toaster toastOptions={{
              style: {
                zIndex: 9999,
              },
            }} />
          </main>
        </div>
      </SitePageProvider>
    </QueryClientProvider>
  )
}
