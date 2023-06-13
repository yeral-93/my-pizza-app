import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouters from './components/routes/AppRoutes';
import { UserProvider } from './components/context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <AppRouters/>
  </UserProvider>
);

