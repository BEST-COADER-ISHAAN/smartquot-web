import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
      TODO: Replace 'YOUR_AUTH0_DOMAIN' and 'YOUR_AUTH0_CLIENT_ID' with your Auth0 values.
      Set 'app.smartquot.net' as an allowed callback and logout URL in your Auth0 dashboard.
    */}
    <Auth0Provider
      domain="dev-bz1pulscak2fu72z.us.auth0.com"
      clientId="uXh9MPPJbT5GuEm2aKBIXa5iVN0uUo71"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
