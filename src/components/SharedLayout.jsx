import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SecondaryHero from './SecondaryHero';

function SharedLayout() {
  const [page, updatePage] = useState('home')
  
  return (
    <>
      <SecondaryHero page={page}/> 
      <Outlet context={{updatePage: updatePage}}/>
    </>
  );
}

export default SharedLayout;
