import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='container mb-2 mt-3' id='contact'>
            <h2 className='text-primary'>Contact us</h2>
            <p className='text-info'>Put Your Message to connect you.</p>
            <div className='login-form bg-info bg-opacity-25 w-75 mx-auto p-5 mt-3'>
             
                <label>Your name: </label>
                <input className='p-2 bg-info bg-opacity-25'  type="text" name="name" id="" placeholder='Name' />
                <br /><br />
                <label>Your Email: </label>
                <input className='p-2 bg-info bg-opacity-25'  type="text" name="email" id="" placeholder='Email' />
                <br /><br />
                <label >Message:</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder='Put your message'></textarea>
                <br /><br />
                <button className='btn btn-primary p-2' type="submit">Contact Us</button>
            
                
           </div>
        </div>
    );
};

export default ContactUs;