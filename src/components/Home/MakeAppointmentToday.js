import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png'
const MakeAppointmentToday = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1 mx-auto'>
                    <img src={doctor} className="max-w-sm rounded-lg shadow-2xl hidden lg:block" alt='' />
                </div>
                <div className='flex-1'>
                    <h2 className='text-5xl text-purple-500 py-3'>Make an Appointment Today</h2>
                    <p className="text-xl text-white py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos, quos omnis quidem laudantium numquam ad sit itaque corrupti iste voluptatum rem alias nostrum incidunt aliquid labore repellendus ea ipsam quaerat quas necessitatibus dignissimos ullam accusantium. Nulla nemo delectus voluptas!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointmentToday;