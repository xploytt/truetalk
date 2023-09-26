import React from 'react';

function BlueButton({icon, id, text, callback, iconLeft, styles}) {
    return (
        <button id={id} className={`bg-[#154ea4] blue-btn text-white ${styles}`} onClick={
            (e)=>{
                callback(e)
            }
        }>
            {iconLeft && icon && <span className="mr-1">{icon}</span>}
            {text}
            {!iconLeft && icon && <span className="ml-1">{icon}</span>}  
        </button>
    );
}

export default BlueButton;