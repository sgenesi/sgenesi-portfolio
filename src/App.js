import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import About from './components/About';
// import Projects from './components/Projects';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: "projects",
      description: "Take a look at some of my work.",
    },
    { name: "resume", description: "Take a look at my resume and my proficiencies." },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="container">
      <Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
      </Header>
      <main>
        <div>
          {/* <Projects currentCategory={currentCategory}></Projects> */}
          <About></About>
        </div>
      </main>
    </div >
  );
}

export default App;
