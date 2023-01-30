import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Library from './Library';
import Clock from './Clock';
import CommentList from './CommentList';
import Accomodate from './Accomodate';
import ConfirmButton from './ConfirmButton';
import LandingPage from './LandingPage';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Clock />
    <Library />
    <CommentList />
    <Accomodate />
    <ConfirmButton />
    <LandingPage />
  </StrictMode>
);
