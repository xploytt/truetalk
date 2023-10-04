import React, { useState, useEffect, useRef } from 'react';
import BlueButton from './BlueButton';
import booksData from '../data/mockBook';
import { FaStar } from 'react-icons/fa';
import '../styles/_home_hero.scss';
import HeroBG from '../assets/hero/hero_bg.jpg'

function BookAsideCard({ Img, name }) {
  const starArray = Array.from({length:5});
  return (
    <>
      <a className='text-black block'>
        <div className='flex items-end bg-white w-[350px] mr-2'>
          <div className='w-[100px] m-[.8rem]'>
            <img src={Img} alt={`${name} logo`} className='w-[100%]' />
          </div>
          <div className='m-[.8rem]'>
            <span className='block text-[#1a1668]'>True-Talk Arena</span>
            <div className='flex items-center'>
              <span className='text-[#03a9f4] text-[1.2rem] font-[600]'>£3.99</span>
              <div className='flex items-center ml-[1rem] gap-1'>
                {starArray.map((value, i) => {
                  console.log(value)
                  return <FaStar key={i} />
                })}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

const contentData = [
  {
    header: 'Prolific Writer',
    whoAmI: ['Motivational Speaker', 'Writer'],
    listing: ['We write to impact knowledge.', 'We speak to impact knowledge.'],
  },
  {
    header: 'Content & Books',
    whoAmI: ['Content Creator', ' Brand Influencer'],
    listing: ["We create content to change people's mindset.", 'We Influence'],
  },
  {
    header: 'Marriage Counselor',
    whoAmI: ['Couples Counselor', 'Relationship Expert'],
    listing: ["We work with couples to help them resolve conflicts.", 'We teach good communication to strengthen your relationship.'],
  },

  {
    header: 'Moral Educator',
    whoAmI: ['Character Teacher', ' Family Counselor'],
    listing: ["We help people develop a strong moral foundation.", 'We help people make morally sound decisions.'],
  }
];

function ContentComponent({ currentIndex, currentlyActive }) {
  const currentContent = contentData[currentIndex];

  return (
    <>
      <div className={`animated-div ${currentlyActive ? 'active' : ''}`}>
        <h1 className='text-[1.5rem] font-[500]'>{currentContent.header}</h1>

        <div className='who-am-i-hero flex gap-4 text-[#e5ccb8]'>
          {currentContent.whoAmI.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>

        <ul className='text[#cecdda] my-[15px] opacity-60'>
          {currentContent.listing.map((d, i) => (
            <li className='text-[.9rem]' key={i}>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentlyActive, updateIsActive] = useState(true);
  const backgroundStyle = {
    backgroundImage: `url(${HeroBG})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  useEffect(() => {
    const contentInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
      updateIsActive(true);
      setTimeout(() => {
        updateIsActive(false); 
      }, 5200);
    }, 5900);

    return () => clearInterval(contentInterval);
  }, []);

  return (
    <section id='hero' className='relative' style={backgroundStyle}>
      <div>
        <div className='py-[40px] mx-auto w-[90%] relative z-10' id='hero-content-wrapper'>
          <h3>Get Sensitized</h3>
          <div className='overflow-x-hidden mx-auto'>
            <ContentComponent currentIndex={currentIndex} currentlyActive={currentlyActive} />
          </div>

          <BlueButton text={'Shop Now'} styles={`w-[120px] h-[50px] font-[500]`} />
        </div>

        <aside id='books-details' className='relative overflow-auto z-10 flex max-w-[50%]'>
          {booksData.map(({ img, name }, i) => (
            <BookAsideCard Img={img} name={name} key={i} />
          ))}
        </aside>
      </div>
    </section>
  );
}


export default HomeHero;
