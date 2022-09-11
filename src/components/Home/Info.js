import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard
                bgColor="bg-teal-500"
                img={clock} cardTitle="Opening Hours"
                description="Click the button to listen on Spotiwhy app"
            ></InfoCard>
            <InfoCard
                bgColor="bg-blue-500"
                img={marker} cardTitle="Our Location"
                description="Click the button to listen on Spotiwhy app"
            ></InfoCard>
            <InfoCard
                bgColor="bg-indigo-500"
                img={phone}
                cardTitle="Contact Us"
                description="Click the button to listen on Spotiwhy app"
            ></InfoCard>
        </div>
    );
};

export default Info;