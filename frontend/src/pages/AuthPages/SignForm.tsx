import { Link } from 'react-router';
import { useAuthPage } from '../../context/AuthContext';
import { Login } from '../../types'

import { useForm } from "react-hook-form"

export default function SignForm({ onSubmit }: {
  onSubmit: (data: Login) => void;
}) {
  const { isLogin } = useAuthPage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                // name="email"
                type="email"
                {...register("email", { required: true })}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                // name="password"
                // type="password"
                {...register("password", { required: true })}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </div>

          <div>
            {isLogin ? (
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                New bounty hunter?
                <Link to="/registration" className="font-semibold text-indigo-600 hover:text-indigo-500 mx-2">
                  Create new account here
                </Link>
              </p>
            ) : (
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Old bounty hunter?
                <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 mx-2">
                  Login
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  )
}
