import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentService from './AppointmentService';
import AppointmentBooking from './AppointmentBooking';
const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [test, setTest] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl text-center text-primary'>Available Appointments: {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService date={date} key={service._id} service={service} setTest={setTest}></AppointmentService>)
                }
            </div>
            <div>
                    {
                        test && <AppointmentBooking date={date} key={test._id} test={test}></AppointmentBooking>
                    }
                </div>
        </div>
    );
};

export default AvailableAppointments;