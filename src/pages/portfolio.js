// File: src/pages/portfolio.js (JavaScript)

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio showcasing projects and skills" />
      </Head>

      <Header />

      <div className="container">
        <h1>Portfolio</h1>
        <div className="projects">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}