import React from 'react';
import Newsletter from '../components/Newsletter';
import YouTubeLinkWrapper from '../components/YouTubeLinkWrapper';
import TestimonialSection from '../components/Testimonials';


function Home(props) {
    return (
        <div>
          <YouTubeLinkWrapper />
          <TestimonialSection />
          <Newsletter />
        </div>
    );
}

export default Home;