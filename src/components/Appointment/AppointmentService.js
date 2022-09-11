import React from 'react';

const AppointmentService = ({ service, setTest }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : 'Try another date'}</p>
                <p>{slots.length} spaces available</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTest(service)}
                        htmlFor="my-modal-6"
                        className="btn btn-primary"
                    >Booking Appointment</label>
                </div>
                
            </div>
        </div>
    );
};

export default AppointmentService;