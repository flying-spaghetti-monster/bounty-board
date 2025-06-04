import { Link, Outlet } from 'react-router';
import { DashboardPageProvider } from '../context/DashboardContext';
import { Toaster } from 'react-hot-toast';
import AppSidebar from '../dashboard/components/AppSidebar';

export default function DashboardLayout() {
  return (
    <DashboardPageProvider>
      <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl">
        <div className="flex items-start justify-between">
          <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
            <div className="h-full bg-white rounded-2xl">
              <div className="flex items-center justify-center pt-6">
                Logo
              </div>
              <AppSidebar />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header className="z-40 items-center w-full h-16 bg-white shadow-lg  rounded-2xl">
            header
          </header>
          <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            Body
            <Outlet />
          </div>
        </div>
        <Toaster toastOptions={{
          style: {
            zIndex: 9999,
          },
        }} />
      </main>
    </DashboardPageProvider>
  )
}
