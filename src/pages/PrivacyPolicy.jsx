import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function PrivacyPolicy(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage('Privacy Policy')
    })
    return (
        <></>
    );
}

export default PrivacyPolicy;