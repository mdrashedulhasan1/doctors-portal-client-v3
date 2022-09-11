import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
                    <img src={review.img} alt='' />
                </div>
            </div>
            <div style={{marginLeft:'10px'}}>
                <h2 className="card-title">{review.name}</h2>
                <p>{review.description}</p>
            </div>
        </div>
    );
};

export default Review;