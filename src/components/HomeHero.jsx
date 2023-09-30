import React from 'react';
import BlueButton from './BlueButton';
import booksData from '../data/mockBook'
import { FaStar } from 'react-icons/fa';
import '../styles/_home_hero.scss'

function BookAsideCard({Img, name}){
    const starArray = new Array(5);
    return (<>
        <a>
            <div>
                <div>
                    <img src={Img} alt={`${name} logo`} />
                </div>
                <div>
                    <span className='block'>True-Talk Arena</span>
                    <div className='flex items-center'>
                        <span>£3.99</span>
                        <div>
                            {
                                starArray.map((value, i)=>{
                                    <FaStar key={i} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </>)
}

function HomeHero(props) {
    return (
        <section id='hero'>
            <div>
                <div className='py-[40px] mx-auto w-[90%]'>
                    <h3>
                        Get Sensitized
                    </h3>
                    <div className='animated-div'>
                        <h1 className='text-[1.5rem] font-[500]'>
                            Prolific Writer
                        </h1>
                        <div id='who-am-i-hero'>
                            <span>Motivational Speaker</span>
                            <span className='ml-auto'>Writer</span>
                        </div>

                        <ul className='text[#cecdda] my-[15px] opacity-60'>
                            <li className='text-[.9rem]'>We write to impact knowledge.</li>
                            <li className='text-[.9rem]'>We speak to impact knowledge.</li>
                        </ul>
                    </div>
                    <BlueButton text={'Shop Now'} styles={`w-[120px] h-[50px] font-[500]`}/>
                </div>

                <aside id='books-details' className='hidden'>
                    {
                        booksData.map(({img, name})=> <BookAsideCard Img={img} name={name}/>)
                    }
                </aside>
            </div>
        </section>
    );
}

export default HomeHero;