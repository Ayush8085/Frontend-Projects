import React from 'react';
import Card from '../Card/Card';
import './main.css';
import card_data from '../../card_data';

const Main = () => {

  return (
    <main>
      <div className="wrapper">
        <div className="layout-grid">
          {
            card_data.map((item, index) => (
              <Card key={index} title={item.title} description={item.description} brColor={item.brColor} iconIndex={index} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Main;