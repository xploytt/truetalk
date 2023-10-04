import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';

function Gallery(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage("Gallery")
    })
    return (
        <div>
            <Newsletter />
        </div>
    );
}

export default Gallery;