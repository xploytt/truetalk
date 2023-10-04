import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';

function Videos(props) {
    const {updatePage} = useOutletContext("Videos")

    useEffect(()=>{
        updatePage("Videos")
    })
    return (
        <div>
            <Newsletter />
        </div>
    );
}

export default Videos;