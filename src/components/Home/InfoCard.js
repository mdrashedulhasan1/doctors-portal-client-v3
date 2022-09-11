import React from 'react';

const InfoCard = ({ img, cardTitle, description, bgColor }) => {
    return (
        <div className={`card lg:card-side shadow-xl p-3 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;