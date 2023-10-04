import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function Disclaimer(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage("Disclaimer")
    })
    return (
        <>
        </>
    );
}

export default Disclaimer;