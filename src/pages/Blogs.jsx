import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';

function Blogs(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage("Blogs")
    })
    
    return (
        <div>
            <Newsletter />
        </div>
    );
}

export default Blogs;