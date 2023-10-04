import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';

function About(props) {
    const {page, updatePage} = useOutletContext()
    useEffect(()=> {
        updatePage("About Us")
    })
    return (
        <>
            <Newsletter />
        </>
    );
}

export default About;