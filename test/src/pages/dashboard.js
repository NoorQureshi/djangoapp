import React from 'react';
import withAuth from '@/hocs/withAuth';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default withAuth(DashboardPage);
