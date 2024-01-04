import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import PortfolioCard from './components/PortfolioCard';

function App() {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <PortfolioCard />
      {/* Add more PortfolioCard components as needed */}
    </div>
  );
}

export default App;
