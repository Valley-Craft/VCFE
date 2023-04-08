import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css';
import '../../styles/main.css';

const Players = () => {
    const [showCaption, setShowCaption] = useState(false);
    const [players, setPlayers] = useState([]);

    const handleMouseEnter = () => {
        setShowCaption(true);
    };

    const handleMouseLeave = () => {
        setShowCaption(false);
    };

    useEffect(() => {
        const apiUrl = 'http://137.74.7.233:4567/v1/players';
        const apiKey = '8i8XtPNtLb24S87TkG82Sdktx4m5a8AZ';
        axios
            .get(apiUrl, { headers: {
                    key: apiKey
                }})
            .then((response) => setPlayers(response.data))
            .catch((error) => console.log(error));
    }, []);

    if (players.length === 0) {
        return null
    }

    return (
        <li className="content-list__item">
            <div className="online__players">
                <div>
                    <h1 className="title-2">Игроки онлайн</h1>
                    {players.map((player) => (
                        <div style={{display: 'inline-block', marginLeft: '30px'}}>
                            <img src={`https://mineskin.eu/avatar/${player.displayName}`} alt="skin" className="head" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                            {/*{showCaption && (<div className="nickname"> {player.displayName} </div>)}*/}
                        </div>
                        ))}
                </div>
            </div>
        </li>
    );
};

export default Players;