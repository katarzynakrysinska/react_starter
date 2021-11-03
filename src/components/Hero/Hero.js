import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

// komponent funkcyjny
const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image}></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  titleImage: PropTypes.string,
};

export default Hero;