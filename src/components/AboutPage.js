import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About Awewome Events</h2>
      <p>
        This app is...
      </p>
      <p>
        <Link to="">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default AboutPage;
