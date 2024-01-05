// App.js
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import PortfolioCard from './components/PortfolioCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <h1 className="portfolio-header">Portfolio</h1>
      <div className="portfolio-section">
        <PortfolioCard
          projectName="Project 1"
          hackathon="Winner of XYZ Hackathon"
          techStack="Tech Stack 1"
          description="Project 1 description..."
          githubLink="https://github.com/project1"
        />
        <PortfolioCard
          projectName="Project 2"
          hackathon="Winner of ABC Hackathon"
          techStack="Tech Stack 2"
          description="Project 2 description..."
          githubLink="https://github.com/project2"
        />
        <PortfolioCard
          projectName="Project 2"
          hackathon="Winner of ABC Hackathon"
          techStack="Tech Stack 2"
          description="Project 2 description..."
          githubLink="https://github.com/project2"
        />
        <PortfolioCard
          projectName="Project 2"
          hackathon="Winner of ABC Hackathon"
          techStack="Tech Stack 2"
          description="Project 2 description..."
          githubLink="https://github.com/project2"
        />
        <PortfolioCard
          projectName="Project 2"
          hackathon="Winner of ABC Hackathon"
          techStack="Tech Stack 2"
          description="Project 2 description..."
          githubLink="https://github.com/project2"
        />
        <PortfolioCard
          projectName="Project 2"
          hackathon="Winner of ABC Hackathon"
          techStack="Tech Stack 2"
          description="Project 2 description..."
          githubLink="https://github.com/project2"
        />
        <PortfolioCard
          projectName="Project 2"
          hackathon="Winner of ABC Hackathon"
          techStack="Tech Stack 2"
          description="Project 2 description..."
          githubLink="https://github.com/project2"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
