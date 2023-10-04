import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function TermsAndServices(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage("Terms Of Use")
    })
    return (
        <></>
    );
}

export default TermsAndServices;