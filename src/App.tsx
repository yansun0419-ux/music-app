import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <a href="/">Discover</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
