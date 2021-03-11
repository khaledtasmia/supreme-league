import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleTeam from '../../../src/male.png';
import femaleTeam from '../../../src/female.png';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const TeamDetails = () => {

    const { idTeam } = useParams();

    const [teamDetails, setTeamDetails] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const details = data.teams;
                details.map(detail => setTeamDetails(detail));
            });
    }, []);

    let image = (teamDetails.strGender === "Male") ? <img src={maleTeam}/> : <img src={femaleTeam}/>

    return (
        <div>
            <div style={{ height: "1500px", backgroundColor: "rgb(133, 88, 145)" }}>
                <img style={{ width: "1348px" }} src={teamDetails.strTeamBanner} />
                <div className="teamdetails-container">
                    <div>
                        <h2 style={{ textShadow: "2px 2px 5px red" }}>{teamDetails.strTeam}</h2>
                        <h4><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Founded: {teamDetails.intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {teamDetails.strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport Type: {teamDetails.strSport}</h4>
                        <h4><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender: {teamDetails.strGender}</h4>
                    </div>
                    <div>
                        {image}
                    </div>
                </div>
                <br />
                <p>{teamDetails.strDescriptionEN}</p>
                <div className="socialMedia">
                        <a href={`https://${teamDetails.strFacebook}`} target="_blank" rel="norefferer"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a>
                        <a href={`https://${teamDetails.strTwitter}`} target="_blank" rel="norefferer"><FontAwesomeIcon style={{marginLeft:"15px"}}icon={faTwitter} size="2x"/></a>
                        <a href={`https://${teamDetails.strYoutube}`} target="_blank" rel="norefferer"><FontAwesomeIcon style={{marginLeft: "15px"}}icon={faYoutube} size="2x"/></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;