import React from 'react';
import "./style.css"

const Player = ({active, setActive, player}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <img src={`https://mineskin.eu/avatar/${player.displayName}`} alt="skin" className="head"/>
                <h1>{player.displayName}</h1>
                <h1>{player.op ? "Админ" : "Игрок"}</h1>
            </div>
        </div>
    );
};

export default Player;