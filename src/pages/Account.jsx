import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function Account(props) {
    const {updatePage} = useOutletContext()

    useEffect(()=>{
        updatePage("Login")
    })

    return (
        <div>
            
        </div>
    );
}

export default Account;