import React, { useEffect, useState } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';
import VidsBlogsComp from '../components/VidsBlogsComp';
import fetchVids from '../utils/fetchVids';

function Videos(props) {
    const {updatePage} = useOutletContext("Videos")
    const [vidsDetails, setVidsDetails] = useState([]) 

    useEffect(()=>{
        updatePage("Videos")
    })

    useEffect(()=> {
        const dataUpdate = async () =>{
           const vidsData = await fetchVids()
           setVidsDetails(vidsData)            
       }

       dataUpdate()
   }, [])
    return (
        <>

            {/* "blog" is used to identify video on this page.
            hence "blog-data" means "video-data"  */}
            <main>
                <section id='blog-section' className='bg-[#212529] pt-[50px] pb-[100px]'>
                  <VidsBlogsComp blogDetails={vidsDetails} isBlog={false} />
                </section>
            </main>
            <Newsletter />
        </>
    );
}

export default Videos;