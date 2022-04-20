import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = ()=>{
  return (
    <Layout title='Index page' heading='Index'>
      <p>Simple page with gatsby</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/dog1.jpg"
      />
    </Layout>
  )
};

export default HomePage;