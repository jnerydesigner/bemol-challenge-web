import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import ToastProvider from './hooks';
import Routes from './routes';

// import { Container } from './styles';

const App: React.FC = () => (
  <Router>
    <ToastProvider>
      <GlobalStyles />
      <Routes />
    </ToastProvider>
  </Router>
);

export default App;
