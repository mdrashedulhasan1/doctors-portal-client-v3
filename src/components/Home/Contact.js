import React from 'react';
import appointment from '../../assets/images/appointment.png';
const Contact = () => {
    return (
        <div style={{background: `url(${appointment})`}} className='text-center p-10 mt-12'>
            <h3 className='text-xl text-orange-600'>Contact Us</h3>
            <h1 className='text-2xl py-3 text-sky-500'>Stay Connected With Us</h1>
            <form className='grid justify-items-center'>
                <input type="email" placeholder="email address" className="input input-bordered w-1/2" />
                <input type="text" placeholder="subject" className="input input-bordered w-1/2 my-5" />
                <input type="text" placeholder="your massage" className="input input-bordered w-1/2 " />
            </form>
            <button className="btn btn-primary mt-3">Get Started</button>
        </div>
    );
};

export default Contact;