import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { RelayEnvironmentProvider } from 'react-relay';
import { environment } from './environment';

import { App } from './App';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={<i>Loading...</i>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
