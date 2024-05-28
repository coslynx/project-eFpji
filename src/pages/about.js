// File: src/pages/about.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Typography } from '@material-ui/core';

const About = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h2" component="h2">
          About Me
        </Typography>
        <Typography variant="body1">
          Insert your detailed information about your background, skills, and interests here.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default About;