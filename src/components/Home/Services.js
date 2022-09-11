import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const servicse = [
        {
            _id:1,
            img:fluoride,
            name:'Fluoride Treatment',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, architecto.',
        },
        {
            _id:2,
            img:cavity,
            name:'Cavity Filling',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, architecto.',
        },
        {
            _id:3,
            img:whitening,
            name:'Teeth Whitenning',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, architecto.',
        },
    ]
    return (
        <section className='mt-12'>
            <h3 className='text-2xl text-center text-green-400'>Our Services</h3>
            <h2 className='text-4xl text-center text-sky-500'>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    servicse.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;