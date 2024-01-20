import React from 'react';
import icon_supervisor from '../../assets/icon-supervisor.svg';
import icon_karma from '../../assets/icon-karma.svg';
import icon_team_builder from '../../assets/icon-team-builder.svg';
import icon_calculator from '../../assets/icon-calculator.svg';
import './card.css';

const Card = (props) => {
  const { title, description, brColor, iconIndex } = props;
  const icons = [icon_supervisor, icon_team_builder, icon_calculator, icon_karma];


  return (
    <div className={`card ${brColor}`}>
      {/* <div className={`card card-${iconIndex + 1} ${brColor}`}> */}
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={icons[iconIndex]} alt="" />
    </div>
  )
}

export default Card;