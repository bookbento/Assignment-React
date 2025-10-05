import React from 'react';

import Navbar from './feature/Navbar';
import Container from './feature/Container';
import Home from './feature/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;