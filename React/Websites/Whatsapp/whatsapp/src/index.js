import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-svzuofinqe54qiib.us.auth0.com'
  clientId='VmhAskcX2LW3ewUBpRo4f1Ns5bHJCaa6'
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  >
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </Auth0Provider>
);

