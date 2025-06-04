import { Link, Outlet } from 'react-router';
import { AuthPageProvider } from '../context/AuthContext';
import HomeIcon from '@mui/icons-material/Home';
import { Toaster } from 'react-hot-toast';

export default function AuthLayout() {
  return (
    <AuthPageProvider>
      <main className="container mx-auto ">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="w-full max-w-md pt-10 mx-auto">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              <HomeIcon />
              Home
            </Link>
          </div>
          <Outlet />
        </div>
        <Toaster toastOptions={{
          style: {
            zIndex: 9999,
          },
        }} />
      </main>
    </AuthPageProvider>
  )
}
