import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


const contactDetails = [
    {
        icon: FaMapMarkerAlt,
        heading: 'Our Address',
        text: 'Northampton, UK'
    },
    {
        icon: FaEnvelope,
        heading: 'Our Email',
        text: 'contact@truetalkarena.com'
    }
]

function Contact(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage('Contact')
    })
    return (
        <>
            <main>
                <section id='get-in-touch'>
                    <h3>
                        Get In Touch
                    </h3>
                    <p>If you are interested in working with us, please get in touch.</p>

                    {
                        contactDetails.map(
                            ({icon: Icon, heading, text}) => 
                        <div key={heading}>
                            <Icon />
                            <div>
                                <h4>{heading}</h4>
                                <span>{text}</span>
                            </div>
                        </div>
                        )
                    }
                </section>
            </main>
            <Newsletter />
        </>
    );
}

export default Contact;