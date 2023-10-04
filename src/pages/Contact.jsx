import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';

function Contact(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage('Contact')
    })
    return (
        <div>
            <Newsletter />
        </div>
    );
}

export default Contact;