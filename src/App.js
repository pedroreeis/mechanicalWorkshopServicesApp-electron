import { HashRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home"
import { NewService } from "./pages/NewService"
import { ServicesCompleted } from "./pages/ServicesCompleted"

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newservice" element={<NewService />} />
          <Route path="/servicecompleted" element={<ServicesCompleted />} />
        </Routes>
    </HashRouter>
  );
}

export default App;