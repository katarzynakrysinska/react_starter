import React from 'react';
import { infoContents } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} image={infoContents.image} />
    <h2>{infoContents.subtitle}</h2>
    <p>{infoContents.text}</p> 
  </Container>
);

export default Info;