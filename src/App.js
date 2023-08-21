import { React, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './containers/Home';

const App = () => {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;