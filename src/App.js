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
      <h1 id="portfolio-header" className="portfolio-header">Portfolio</h1>
      <div className="portfolio-section">
        <PortfolioCard
          projectName="Pawndr"
          hackathon="Winner at Hack Western 10"
          techStack="React.js, FastAPI, MongoDB, OpenAI API"
          description="Pawndr is an innovative SMS journaling app designed to make self-reflection simple, engaging, and seamlessly integrated into your daily life. <br><br><i>Awards:</i><br>- Finalist <br>- Best Hack to Help Improve Mental Well-being <br>- Most Creative Use of GitHub <br>- Organizer's Choice Awards"
          githubLink="https://github.com/hack-western-2023/pawndr"
          projectImage="pawndr.jpg"
        />
        <PortfolioCard
          projectName="Smart Bites"
          hackathon="Hack the North 2023"
          techStack="React.js, Flask, OpenAI API"
          description="Do you wish there was an easy way to find nutritious items on a restaurant menu? <br><br>Introducing Smart Bites, the web app that takes a picture of a menu and provides you with personalized recommendations."
          githubLink="https://github.com/liaofrank91/htn2023-react"
          projectImage="smart_bites.png"
        />
        <PortfolioCard
          projectName="Verses"
          hackathon="Winner at Hack Western 9"
          techStack="React.js, Spotify API"
          description="Verses is a music quiz app that allows users to test themselves and their friends on their music taste by creating a quiz that randomly generates questions on their music taste. <br><br><i>Awards:</i><br>- Organizer's Choice Awards"
          githubLink="https://github.com/OmarCodes2/hackwestern"
          projectImage="verses.jpg"
        />
        <PortfolioCard
          projectName="AFK Student"
          hackathon="Winner at Ignition Hacks 2021"
          techStack="Python, Twilio, OCR"
          description="Imagine being able to leave your meets, without the fear of being called on. Behold AFK Student. AFK Student is a program that lets you leave your meet and alerts you when your name gets called.<br><br><i>Awards:</i><br>-Division Sigma 1st Place"
          githubLink="https://devpost.com/software/warning-lmvyx3"
          projectImage="afkstudent.png"
        />
        <PortfolioCard
          projectName="Lori's Grocer"
          hackathon="ICS4U1"
          techStack="Python, SQLite"
          description="
A grocery store management program enables CRUD operations on three tables: inventory, employee, and sales. <br>Employee roles (owner, supervisor, cashier) are defined, with the owner having unrestricted access.<br><br>Obtained 95% on the project"
          githubLink="https://github.com/DeZhaysun/Loris-Grocer"
          projectImage="loris.png"
        />
        <PortfolioCard
          projectName="Wavey"
          hackathon="Hack the North 2021"
          techStack="Python, OpenCV, OCR"
          description="The Ultimate Note-Taking Assistant for Students.<br><br>Wavey makes note-taking incredibly efficient by utilizing hand gestures to perform certain actions to aid students."
          githubLink="https://github.com/DeZhaysun/Wavey"
          projectImage="wavey.png"
        />
        <PortfolioCard
          projectName="RAIINET (PROJECT LINK NOT AVAILABLE)"
          hackathon="CS246 Object Oriented Software (University of Waterloo)"
          techStack="C++"
          description="Developed a sophisticated board games with X11 graphics and C++ in a team of 3.<br><br>Designed the program with a UML and implemented design patterns such as MVC and the Observer pattern while using principles such as polymorphism, encapsulation and inheritance.<br><br>Obtained 102% with bonus features."
          githubLink=""
          projectImage="project1_image.jpeg"
        />
        <PortfolioCard
          projectName="Cross the Road"
          hackathon=""
          techStack="Java"
          description="Pretty much a crossy road replica, made using vanilla Java. <br><br>Features:<br>- Cars over roads<br>- Logs over water<br>- Safe patches of land<br>- Keeps track of high score<br>- Choose your own chicken"
          githubLink="https://github.com/DeZhaysun/Cross-the-Road"
          projectImage="crosstheroad.png"
        />
        <PortfolioCard
          projectName="Portfolio Website"
          hackathon=""
          techStack="React.js"
          description="The website you are looking at right now! <br><br>Personal website displaying all my projects along with useful links."
          githubLink="https://github.com/DeZhaysun/portfolio"
          projectImage="portfolio.png"
        />
        <PortfolioCard
          projectName="React Iguodala"
          hackathon=""
          techStack="React.js"
          description="A fun website about the clutchest basketball player, Andre Iguodala.<br><br>Made to learn React.js"
          githubLink="https://dezhaysun.github.io/react-iguodala/"
          projectImage="iguodala.png"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
