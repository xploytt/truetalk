import React, { useEffect } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';
import firstImg from '../assets/gallery/1.png'
import secondImg from '../assets/gallery/2.png'
import thirdImg from '../assets/gallery/3.png'
import fourthImg from '../assets/gallery/4.png'
import fifthImg from '../assets/gallery/5.png'
import '../styles/_gallery.scss'

function Gallery(props) {
    const {updatePage} = useOutletContext()
    let imgs = [firstImg, secondImg, thirdImg, fourthImg, fifthImg]

    useEffect(()=>{
        updatePage("Gallery")
    })

    return (
        <>
            <main>
                <section id='gallery-section' className='bg-[#212529]'>
                    <div id='img-grid' className='grid mx-auto items-center gap-6'>
                        {imgs.map((pic, i)=> 
                        <div key={i} className='mx-auto'>
                        <img alt='One of our images from true talk gallery' src={pic} className='w-[100%]' />
                        </div>)}
                    </div>
                </section>
            </main>
            <Newsletter />
        </>
    );
}

export default Gallery;