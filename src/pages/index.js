// File: src/pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio Website</title>
        <meta name="description" content="Sleek and modern portfolio website built using NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>Here you can find information about my projects and skills.</p>

        <section>
          <h2>Featured Projects</h2>
          <div className="project-list">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}