import React from 'react';
import { FAQContents } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQContents.title} image={FAQContents.image} />
    <h2>{FAQContents.subtitle}</h2>
    <p>{FAQContents.text}</p> 
  </Container>
);

export default FAQ;