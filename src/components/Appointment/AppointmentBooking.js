import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AppointmentBooking = ({ test, date, setTest }) => {
    const {_id, name, slots} = test;
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name,slot);
        const formattedDate = format(date, 'pp');
        const booking = {
            treatmentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:5000/booking',{
            method:'post',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.success){
                toast(`Appoinment is set, ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appoinment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
        })
        setTest(null)
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-3 mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs bg-primary text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBooking;