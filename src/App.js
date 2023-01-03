import { HashRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home"
import { NewService } from "./pages/NewService"

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newservice" element={<NewService />} />
        </Routes>
    </HashRouter>
  );
}

export default App;