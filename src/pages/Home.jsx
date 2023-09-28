import React from 'react';
import Newsletter from '../components/Newsletter';
import YouTubeLinkWrapper from '../components/YouTubeLinkWrapper';

function Home(props) {
    return (
        <div>
          <p>Home content</p>
          <YouTubeLinkWrapper />
          <Newsletter />
        </div>
    );
}

export default Home;