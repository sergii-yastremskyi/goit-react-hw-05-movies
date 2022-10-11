import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

export default function SharedLayout() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    if (params['*']) {
      navigate('/');
    }
  }, []);
  return <Outlet />;
}
