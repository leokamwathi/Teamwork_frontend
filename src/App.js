import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
      <Routes reponame={process.env.PUBLIC_URL} />
        </Router>
  );
}

export default App;
