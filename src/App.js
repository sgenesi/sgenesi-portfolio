import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import About from './components/About';
import Project from './components/Project';
import projects from './projects.json';
import Wrapper from './components/Wrapper';
import './App.css';

function App() {

  const [projectList, setProjectList] = useState(projects);

  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <About></About>
        <Wrapper>
          <h1 className="title">Projects</h1>
          {projectList.map(project => (
            <Project title={project.title} photo={project.photo} deployed={project.deployed} github={project.github} />
          ))}
        </Wrapper>
      </main>
    </div>
  );
}

export default App;
