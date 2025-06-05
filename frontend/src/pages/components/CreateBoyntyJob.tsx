import React, { useState } from 'react';
import { Planets } from '../../lib/constants';
import { handleCreateJob } from '../../hooks/hooks';


const CreateBoyntyJob = ({ setIsModalOpen }: {
  setIsModalOpen: (val: boolean) => void
}) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    target: '',
    planet: '',
    reward: '',
    image: '#ffffff',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'reward' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCreateJob(form);
    setIsModalOpen(false)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
      <div>
        <label className="block text-white font-semibold mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white font-semibold mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white font-semibold mb-1">Target</label>
        <input
          type="text"
          name="target"
          value={form.target}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white font-semibold mb-1">Planet</label>
        <select
          name="planet"
          value={form.planet}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          required
        >
          <option value="" disabled>Select planet</option>
          {Planets.map((planet: string) => (
            <option key={planet} value={planet}>{planet}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-white font-semibold mb-1">Reward</label>
        <input
          type="number"
          name="reward"
          value={form.reward}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-white font-semibold mb-1">Select Planet color</label>
        <input
          type="color"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="w-12 h-12 p-0 border-0 bg-transparent align-middle mr-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        Create Bounty Job
      </button>
    </form>
  );
};

export default CreateBoyntyJob;
