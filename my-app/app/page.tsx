'use client';

import { useContext, useEffect } from 'react';
import Dashboard from './dashboard/page';
import { Context } from '@/provider';

const Home: React.FC = () => {
  const { get_list } = useContext(Context);

  useEffect(() => {
    get_list();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-2">
      <Dashboard />
    </div>
  );
};
export default Home;
