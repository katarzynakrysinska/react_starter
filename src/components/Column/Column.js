import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
//import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';


class Column extends React.Component {

  static propTypes = {
    column: PropTypes.string,
    cards: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,       
  }

  render() {

    const {title, icon, cards} = this.props;
    
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}><Icon name={icon} /></span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>*/}
      </section>
    );
  }
}

export default Column;
