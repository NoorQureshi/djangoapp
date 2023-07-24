import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isAuthenticated } from '@/utils/withAuthSSR';

const DashboardLink = () => {
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    const isLoggedIn = await isAuthenticated({});
    if (isLoggedIn) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  return (
    <Link href="/dashboard" passHref>
      <a onClick={handleClick}>Dashboard</a>
    </Link>
  );
};

export default DashboardLink;
