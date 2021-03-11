import React, { useEffect, useState } from 'react';
import background from '../../../src/bg.jpg';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {

    const [totalTeams, setTotalTeams] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
            .then(res => res.json())
            .then(data => setTotalTeams(data.teams));
    }, []);

    const style1={ 
        backgroundImage: `url(${background})`, 
        height: "160px",
        textAlign: "center", 
        fontSize: "50px" 
    };

    return (
        <div style={{height: "100%", backgroundColor: "rgb(133, 88, 145)"}}>
            <div style={style1}>
                <b><i>Supreme League</i></b>
            </div>
            <div style={{height: "7500px"}}>
                {
                    totalTeams.map( teams => <Teams teams={teams}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;