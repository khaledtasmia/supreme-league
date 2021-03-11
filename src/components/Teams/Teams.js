import React from 'react';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Teams = (props) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = props.teams;

    return (
        <div className="teams-container">
            <img src={strTeamBadge}/>
            <h2 style={{textShadow:"0 0 3px #FF0000, 0 0 5px #0000FF"}}>{strTeam}</h2>
            <p>Sport Type: {strSport}</p>
            <button><Link to={`/teamDetails/${idTeam}`} className="link">Explore Now <FontAwesomeIcon icon={faArrowRight}/></Link></button>
        </div>
    );
};

export default Teams;