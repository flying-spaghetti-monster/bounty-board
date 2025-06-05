import { useState } from 'react';
import { useSitePage } from '../../context/SiteContext';
import { Link } from 'react-router';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../components/Modal';
import CreateBoyntyJob from '../components/CreateBoyntyJob';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useSitePage();

  return (
    <>
      <header className="bg-[#adafb0] p-2 flex justify-end items-center">
        <div className='flex-1 text-left font-bold text-black'>Start Your Hunting with us</div>
        {isLoggedIn && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-900 text-white px-2 py-1 rounded hover:bg-green-700 cursor-pointer mx-2"
          >
            <AddIcon />
            Add Job
          </button>)}
        <Link className='flex w-20 justify-center  rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500
       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer' to={isLoggedIn ? '/logout' : '/login'}>{isLoggedIn ? 'Logout' : 'Login'}</Link>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateBoyntyJob setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>

  )
}
